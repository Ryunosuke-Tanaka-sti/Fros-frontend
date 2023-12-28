import React, { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const axiosClient = axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingComponent = (props: Props) => {
  const { children } = props;

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
      return config;
    });
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        showBoundary(error);
        return Promise.reject(error);
      }
    );
    // クリーンアップ
    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [showBoundary]);

  return <>{children}</>;
};
