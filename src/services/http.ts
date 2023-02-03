import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';

class Http {
  private instance: AxiosInstance | undefined;

  private readonly defaults: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    }
  };

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.init();
  }

  public get request(): AxiosInstance {
    return this.http;
  }

  public init({
    config,
    configFn
  }: { config?: AxiosRequestConfig; configFn?: () => AxiosRequestConfig | Promise<AxiosRequestConfig> } = {}) {
    const http = axios.create(merge(this.defaults, config));

    http.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig | AxiosRequestConfig> => {
        if (configFn) {
          const requestConfig = await configFn();

          if (requestConfig instanceof Promise) {
            return requestConfig.then(newConfig => Promise.resolve(merge(config, newConfig)));
          }

          const data = merge(config, requestConfig || {});

          return data;
        }

        return config;
      },
      error => Promise.reject(error)
    );

    this.instance = http;
    return http;
  }
}

export default new Http();
