import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";
import LoginPage from "@/views/LoginPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/main",
      name: "MainPage",
      component: () => import("@/views/MainPage.vue"),
      beforeEnter(to, from, next) {
        if (store.state.hasPermission) {
          next();
        } else {
          next({
            name: "LoginPage",
          });
        }
      },
    },
  ],
});
