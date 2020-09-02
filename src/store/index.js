import Vue from "vue";
import Vuex from "vuex";
import booking from "./modules/booking.store"

Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    booking
  }
});
