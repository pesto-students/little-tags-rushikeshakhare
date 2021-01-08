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

  private startAPIRequest(apiUrl: string): void {
    startActivity(apiUrl);
  }

  private finishAPIRequest(apiUrl: string): void {
    completeActivity(apiUrl);
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
    const apiUrl = this.apiUrl(response.config);
    this.finishAPIRequest(apiUrl);
    return response;
  };

  private requestErrorInterceptor = (error: AxiosError) => {
    return Promise.reject(error);
  };

  private responseErrorInterceptor = (error: AxiosError) => {
    if (error && error.response) {
      const apiUrl = this.apiUrl(error.response.config);
      this.finishAPIRequest(apiUrl);
      return Promise.reject(error.response);
    }
  };
}

export default Interceptor;
