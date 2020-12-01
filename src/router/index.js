import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@src/views"),
    redirect: "home",
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("@src/views/Home")
      },
      {
        name: "markdown",
        path: "markdown",
        component: () => import("@src/views/MarkdownGrammar.md")
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@src/views/404")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
