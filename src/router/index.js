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
    component: () => import("../views/BookingAir.vue"),
    children: [
      {
        path: "Booking",
        component: () => import("../views/BookingAir/Booking.vue")
      },
      {
        path: "Client",
        component: () => import("../views/BookingAir/Client.vue")
      },
      {
        path: "Details",
        component: () => import("../views/BookingAir/Details.vue")
      },
      {
        path: "OriginDestination",
        component: () => import("../views/BookingAir/OriginDestination.vue")
      },
      {
        path: "OtherInfo",
        component: () => import("../views/BookingAir/OtherInfo.vue")
      },
      {
        path: "RevenueCosts",
        component: () => import("../views/BookingAir/RevenueCosts.vue")
      },
      {
        path: "Shipments",
        component: () => import("../views/BookingAir/Shipments.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
