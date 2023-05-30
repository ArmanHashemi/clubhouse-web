import Vue from "vue";
import axios from "axios";
import { store } from "src/store";
import { LocalStorage, Notify } from "quasar";

class Service {
  constructor() {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const service = axios.create({
      // baseURL: process.env.BASE_URL,
    });
    service.interceptors.response.use(
      this.ResponseSuccessHandler,
      this.ResponseErrorHandler
    );
    service.interceptors.request.use(
      this.RequestSuccessHandler,
      this.RequestErrorHandler
    );
    this.service = service;
  }

  RequestSuccessHandler(request) {
    store.commit("main/SET_STATE", { key: "loading", value: true });
    return request;
  }

  RequestErrorHandler = (error) => {
    store.commit("main/SET_STATE", { key: "loading", value: false });
    return Promise.reject(error);
  };

  ResponseSuccessHandler(response) {
    store.commit("main/SET_STATE", { key: "loading", value: false });
    if (response.data.message && response.data.message !== "") {
      Notify.create({
        position: "top",
        message: response.data.message,
        color: "green",
      });
    }

    return response;
  }

  ResponseErrorHandler = (error) => {
    console.log(error);
    store.commit("main/SET_STATE", { key: "loading", value: false });
    Notify.create({
      position: "top",
      message: error.response.data.message
        ? error.response.data.message
        : error,
      color: "red",
    });
    switch (error.response.status) {
      case 401:
        break;
    }
    return Promise.reject(error);
  };

  async send(method, url, data) {
    const token = await LocalStorage.getItem("token");
    const options = {
      method: method,
      url: url,
      headers: {
        "CH-Languages": "en-US",
        "CH-UserID": "1234567890",
        "CH-Locale": "en_US",
        "CH-AppBuild": "297",
        "CH-AppVersion": "0.1.27",
        "CH-DeviceId": "7CAF8200-EC2B-4392-A62B-62D41AFB7648",
        "User-Agent": "clubhouse/297 (iPhone; iOS 14.4; Scale/2.00)",
        Authorization: `Token ${token}`,
      },
      data: data || null,
    };
    return this.service.request(options);
  }
}

Vue.$servic = Vue.prototype.$service = new Service();

export default new Service();
