import '@/assets/styles/index.scss';

import config from '@/config';

import http from './services/http';

if (config.app.isDev) {
  console.log('DEVELOPMENT');
} else {
  console.log('PRODUCTION');
}

http.init({
  configFn: () => {

    return {
      baseURL: config.api.baseUrl,
    };
  },
});
