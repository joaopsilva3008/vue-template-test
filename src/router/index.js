import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/BookingAir",
    name: "Booking Air",
    component: () =>
      import("../views/BookingAir.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
