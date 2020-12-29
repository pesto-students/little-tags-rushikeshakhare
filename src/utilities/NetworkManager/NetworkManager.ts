import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosProvider } from "./AxiosProvider";
import Interceptor from "./Interceptor";

class NetworkManager {
  private axiosInstance: AxiosInstance;
  private static instance: NetworkManager;

  constructor() {
    this.axiosInstance = AxiosProvider;
    Interceptor.getInstance();
  }

  public static getInstance(): NetworkManager {
    if (!NetworkManager.instance) {
      NetworkManager.instance = new NetworkManager();
    }
    return NetworkManager.instance;
  }

  get(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.get(path, config);
  }

  post(
    path: string,
    data = {},
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance.post(path, data, config);
  }

  delete(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.delete(path, config);
  }

  put(
    path: string,
    data = {},
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.axiosInstance.put(path, data, config);
  }
}

export default NetworkManager.getInstance();
