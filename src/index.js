import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@src/assets/css/markdown.css";
import "./assets/css/global.less";
import "./plugins";
import "@views/Study/debug";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
