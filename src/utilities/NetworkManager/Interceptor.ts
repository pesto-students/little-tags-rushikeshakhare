import { AxiosProvider } from "./AxiosProvider";
import {
  startActivity,
  completeActivity,
} from "../../store/NetworkActivity/Actions";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

class Interceptor {
  private static intstance: Interceptor;

  constructor() {
    AxiosProvider.interceptors.request.use(
      this.requestInterceptor,
      this.requestErrorInterceptor
    );
    AxiosProvider.interceptors.response.use(
      this.responseInterceptor,
      this.responseErrorInterceptor
    );
  }

  public static getInstance(): Interceptor {
    if (!Interceptor.intstance) {
      Interceptor.intstance = new Interceptor();
    }
    return Interceptor.intstance;
  }

  private apiUrl(config: any): string {
    return `${config.method}_${config.url}`;
  }

  private startAPIRequest(apiKey: string): void {
    startActivity(apiKey);
  }

  private finishAPIRequest(apiKey: string): void {
    completeActivity(apiKey);
  }

  private requestInterceptor = async (config: AxiosRequestConfig) => {
    try {
      const apiKey = this.apiUrl(config);
      this.startAPIRequest(apiKey);
      return config;
    } catch (err) {
      return config;
    }
  };

  private responseInterceptor = (response: AxiosResponse) => {
    const apiKey = this.apiUrl(response.config);
    this.finishAPIRequest(apiKey);
    return response;
  };

  private requestErrorInterceptor = (error: AxiosError) => {
    return Promise.reject(error);
  };

  private responseErrorInterceptor = (error: AxiosError) => {
    if (error && error.response) {
      const apiKey = this.apiUrl(error.response.config);
      this.finishAPIRequest(apiKey);
      return Promise.reject(error.response);
    }
  };
}

export default Interceptor;
