<template>
  <div class="about">
    <BookingAIR />
  </div>
</template>

<script>
// @ is an alias to /src
import BookingAIR from "@/components/BookingAIR.vue";

export default {
  name: "Home",
  components: {
    BookingAIR
  }
};
</script>