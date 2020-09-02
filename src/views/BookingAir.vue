<template>
  <div class="about">
     <div id="nav">
      <router-link to="/BookingAir/Client">Client</router-link> |
      <router-link to="/BookingAir/Booking">Booking</router-link> |
      <router-link to="/BookingAir/OriginDestination">Origin and Destination</router-link> |
      <router-link to="/BookingAir/Details">Booking Detail</router-link> |
      <router-link to="/BookingAir/Shipments">Shipments</router-link> |
      <router-link to="/BookingAir/OtherInfo">Other Info</router-link> |
      <router-link to="/BookingAir/RevenueCosts">Revenue and Costs</router-link> |
    </div> 
    <router-view></router-view>
    <BookingAIR />
  </div>
</template>

<script>
// @ is an alias to /src
import BookingAIR from "@/components/BookingAIR.vue";

export default {
  components: {
    BookingAIR
  }
};
</script>