import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/scss/global.scss";
Vue.config.productionTip = false;
//**
import Axios from "axios";

Vue.prototype.$http = Axios;

const token = localStorage.getItem("token");
Vue.use(ElementUI);
if (token) {
  //заголовок для запросов
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
//**
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
