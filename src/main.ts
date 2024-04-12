import "../src/assets/default.css";
import { createApp } from "vue";
import App from "./App.vue";
import IntroVue from "./components/Intro.vue";
import HelloWorldVue from "./components/HelloWorld.vue";
import { createRouter, createWebHistory } from "vue-router";

import LayoutVue from "./components/Layout.vue";

const routes = [
  { path: "/", component: IntroVue },
  { path: "/about", component: HelloWorldVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
