<template>
  <div>
    <div style="float:right;margin:20px 0">
      <DxButton
        id="btn-save"
        text="Save"
        type="success"
        styling-mode="contained"
        :width="120"
        @click="saveBooking"
      />
    </div>
    <div>
      <div>
        <div>
          <div id="longtabs">
            <DxTabs
              :data-source="longtabs"
              :selected-index.sync="selectedIndex"
              @click="switchTabs(longtabs.id)"
            />
          </div>
          <div id="tab-client" class="dxTabStyle" v-if="selectedIndex == 0">
            <ClientComponent :booking="booking_air" />
          </div>
          <div id="tab-booking" class="dxTabStyle" v-if="selectedIndex == 1">
            <BookingComponent :booking="booking_air" />
          </div>
          <div id="tab-origin-destination" class="dxTabStyle" v-if="selectedIndex == 2">
            <OriginDestinationComponent :booking="booking_air" />
          </div>
          <div id="tab-booking-detail" class="dxTabStyle" v-if="selectedIndex == 3">
            <DetailsComponent :booking="booking_air" />
          </div>
          <div id="tab-shipments" class="dxTabStyle" v-if="selectedIndex == 4">
            <ShipmentComponent :booking="booking_air" />
          </div>
          <div id="tab-other-info" class="dxTabStyle" v-if="selectedIndex == 5">
            <OtherInfoComponent :booking="booking_air" />
          </div>
          <div id="tab-revenue-costs" class="dxTabStyle" v-if="selectedIndex == 6">
            <RevenueCostsComponent :booking="booking_air" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DxButton from "devextreme-vue/button";
import DxTabs from "devextreme-vue/tabs";
import BookingComponent from "@/components/BookingAir/Booking.vue";
import ClientComponent from "@/components/BookingAir/Client.vue";
import DetailsComponent from "@/components/BookingAir/Details.vue";
import OriginDestinationComponent from "@/components/BookingAir/OriginDestination.vue";
import OtherInfoComponent from "@/components/BookingAir/OtherInfo.vue";
import RevenueCostsComponent from "@/components/BookingAir/RevenueCosts.vue";
import ShipmentComponent from "@/components/BookingAir/Shipments.vue";

export default {
  name: "BookingAir",
  methods: {
    saveBooking() {
      alert("Hello world!");
    },
    switchTabs(id) {
      console.log(id);
    }
  },
  components: {
    DxButton,
    DxTabs,
    BookingComponent,
    ClientComponent,
    DetailsComponent,
    OriginDestinationComponent,
    OtherInfoComponent,
    RevenueCostsComponent,
    ShipmentComponent
  },
  computed: {
    booking_air() {
      return this.$store.getters.getBooking;      
    },
  },
  data: () => ({
    selectedIndex: 0,
    longtabs,
    bookingObj: null
  })
};

export const longtabs = [
  { text: "Client", id: 1 },
  { text: "Booking", id: 2 },
  { text: "Origin and Destination", id: 3 },
  { text: "Booking Detail", id: 4 },
  { text: "Shipments", id: 5 },
  { text: "Other Info", id: 6 },
  { text: "Revenue and Costs", id: 7 }
];
</script>
