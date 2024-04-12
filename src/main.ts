import "../src/assets/default.css";
import App from "./App.vue";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import IntroVue from "./components/Intro.vue";
import Projects from "./components/Projects.vue";
import AboutVue from "./components/About.vue";
import FrontEndVue from "./components/aboutComponents/FrontEnd.vue";
import BackEndVue from "./components/aboutComponents/BackEnd.vue";
import DevOpsVue from "./components/aboutComponents/DevOps.vue";
import SOVue from "./components/aboutComponents/SO.vue";
import DesignVue from "./components/aboutComponents/Design.vue";

const routes = [
  { path: "/", component: IntroVue },

  {
    path: "/about",
    component: AboutVue,
    children: [
      {
        path: "frontend",
        component: FrontEndVue,
      },
      {
        path: "backend",
        component: BackEndVue,
      },
      {
        path: "devops",
        component: DevOpsVue,
      },
      {
        path: "so",
        component: SOVue,
      },
      {
        path: "design",
        component: DesignVue,
      },
    ],
  },

  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
