.<template>
  <div>
    <div class="tab-container-header">
      <i
        class="far fa-clipboard-list bkg-icon-left-menu"
        style="margin-right:10px"
      ></i>
      <h3 class="box-title">Booking</h3>
    </div>
    <div class="tab-container-body">
      <div class="dx-fieldset">
        <div class="dx-field">
          <div class="dx-field-label">Status</div>
          <div class="dx-field-value">
          <DxSelectBox :items="statusObj"/>
        </div>
        </div>
        <div class="dx-field">
          <div class="dx-field-label">Booking Type</div>
          <!-- <div class="dx-field-value"> </div> -->
        </div>
        <div class="dx-field">
          <div class="dx-field-label">Business Type</div>
          <!-- <div class="dx-field-value"> </div> -->
        </div>
        <div class="dx-field">
          <div class="dx-field-label">MITCC</div>
          <!-- <div class="dx-field-value"> </div> -->
        </div>
        <div class="dx-field">
          <div class="dx-field-label">Condition</div>
          <!-- <div class="dx-field-value"> </div> -->
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  name: "BookingComponent",
  props: ["booking"],
  components: {
    DxSelectBox
  },
  data: () => ({
    statusObj    
  })
};

export const statusObj = [
  { text:"OPEN",id:40},
  { text:"FULLY PLND.",id:41},
  { text:"PENDING",id:42},
  { text:"ON WAIT",id:43},
  { text:"AWAITING LOAD",id:44},
  { text:"PICKUP PLND.",id:107},
  { text:"INTERNAT. PLND.",id:108},
  { text:"HOLD",id:109},
  { text:"CANCELED",id:126},
  { text:"CLIENT LOCKED",id:133},
  { text:"PLANNED",id:159},
  { text:"PARTIALLY PLANNED",id:269},
  { text:"COMPLETED",id:342},
  { text:"CANCELED BY OPERATOR",id:343}
];
</script>
