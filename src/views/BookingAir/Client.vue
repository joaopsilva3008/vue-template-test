.<template>
  <div>
    <ClientComponent />
  </div>
</template>

<script>
import ClientComponent from "@/components/BookingAir/Client.vue";

export default {
  name: "Client",
  components: {
    ClientComponent
  }
};
</script>
