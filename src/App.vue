<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/BookingAir">Booking Air</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  @import './assets/css/global.css';
</style>
