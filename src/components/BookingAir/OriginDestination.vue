.<template>
  <div>
    <div class="box-header ui-sortable-handle">
      <i
        class="far fa-map-marker-alt bkg-icon-left-menu"
        style="margin-right:10px"
      ></i>
      <h3 class="box-title">Origin and Destination</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "OriginDestinationComponent",
  props: ["booking"]
};
</script>
