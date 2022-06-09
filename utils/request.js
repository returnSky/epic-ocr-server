const axios = require("axios");

const defaultConfig = {
  timeout: 3 * 60 * 1000,
  baseURL: "",
};

const defaultRequestInterceptor = async (config) => {
  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
  };
  return config;
};

const defaultResponseInterceptor = (response) => {
  return {
    ...response.data,
  };
};

const customRequest = (options) => {
  return new Promise((resolve, reject) => {
    const instance = axios.create({ ...defaultConfig, ...options?.config });

    instance.interceptors.request.use(
      options?.requestInterceptorHandler || defaultRequestInterceptor
    );

    instance.interceptors.response.use(
      options?.responseInterceptorHandler || defaultResponseInterceptor
    );

    instance(options)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = customRequest;
