.<template>
  <div>
    <div class="tab-container-header">
      <i
        class="far fa-conveyor-belt-alt bkg-icon-left-menu"
        style="margin-right:10px"
      ></i>
      <h3 class="box-title">Shipments</h3>
    </div>
    <div class="tab-container-body">
      <DxDataGrid
        :data-source="booking.Shipment"
        :show-borders="true"
        :col-span="12"
      >
        <DxPaging :page-size="10" />
        <DxPager
          :show-page-size-selector="true"
          :allowed-page-sizes="[10, 25, 50, 100]"
          :show-info="true"
        />
        <DxColumn data-field="LoadID" />
        <DxColumn data-field="ShipmentNumber" />
        <DxColumn data-field="Address.AddressName" />
        <DxColumn data-field="Address1.AddressName" />
        <DxColumn data-field="PickUpFromDate" />
        <DxColumn data-field="PickUpToDate" />
        <DxColumn data-field="DeliveryFromDate" />
        <DxColumn data-field="DeliveryToDate" />
        <DxColumn data-field="PlanID" />
        <DxColumn data-field="TMS" />
      </DxDataGrid>
    </div>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxPager,
  DxPaging
} from "devextreme-vue/data-grid";

export default {
  name: "ShipmentsComponent",
  props: ["booking"],
  components: {
    DxDataGrid,
    DxColumn,
    DxPager,
    DxPaging
  },
  computed: {
    loadingStatus() {
      return this.$store.getters.getLoadingStatus;      
    }
  }
};
</script>
