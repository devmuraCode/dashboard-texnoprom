const ENV = import.meta.env;

const config = {
  app: {
    env: ENV.VITE_ENV,
    isDev: ENV.VITE_ENV !== 'production',
  },
  api: {
    baseUrl: ENV.VITE_API_BASE_URL,
  },
};

export default config;
