<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/BookingAir/Client">Booking Air</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
    mounted(){
      this.$store.dispatch('setBooking');
    }
}
</script>
<style>
  @import './assets/css/global.css';
</style>
