<template>
  <div class="about">
     <!-- <div id="nav" style="padding-bottom: 17px;">
      <router-link to="/BookingAir/Client" class="tab-link">Client</router-link>
      <router-link to="/BookingAir/Booking" class="tab-link">Booking</router-link>
      <router-link to="/BookingAir/OriginDestination" class="tab-link">Origin and Destination</router-link>
      <router-link to="/BookingAir/Details" class="tab-link">Booking Detail</router-link>
      <router-link to="/BookingAir/Shipments" class="tab-link">Shipments</router-link>
      <router-link to="/BookingAir/OtherInfo" class="tab-link">Other Info</router-link>
      <router-link to="/BookingAir/RevenueCosts" class="tab-link">Revenue and Costs</router-link>
    </div> 
    <router-view></router-view> -->
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