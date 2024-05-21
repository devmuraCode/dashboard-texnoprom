import "@/assets/styles/index.scss";

import config from "@/config";

import { store } from "@/store";

import http from "./services/http";

if (config.app.isDev) {
  console.log("DEVELOPMENT");
} else {
  console.log("PRODUCTION");
}

http.init({
  configFn: () => {
    const state = store.getState();
    const token = state.auth.token;

    return {
      baseURL: config.api.baseUrl,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  },
});
