import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Book from "../views/Book.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/book",
    name: "Book",
    component: Book,
    beforeEnter(to, from, next) {
      if (from.name === 'Login') {
        next()
      } else {
        next({name:'Login'})
      }
    }
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
