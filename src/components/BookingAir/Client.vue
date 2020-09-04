.<template>
  <div>
    <div class="tab-container-header">
      <i class="far fa-user bkg-icon-left-menu" style="margin-right:10px"></i>
      <h3 class="box-title">Client</h3>
    </div>
    <div class="tab-container-body">
		<div class="dx-fieldset">
			<div class="dx-field"><h2>{{ booking.Client.ClientName }}</h2> <i class="far fa-pencil bkg-icon-left-menu" style="margin: 36px 10px 0px 15px;font-size: 42px;"></i></div>
		</div>
		<div class="dx-fieldset">
			<div class="dx-field" style="font-size:20px"><b style="margin-right:10px">NIF:</b>  {{booking.Client.VATNumber}}</div>
		</div>
		<div class="dx-fieldset">
			<div class="dx-field" style="font-size:20px"><b style="margin-right:10px">ERP Code:</b> {{booking.Client.ClientCurrency[0].ERPCode}}</div>
		</div>
		<div class="dx-fieldset">
			<div class="dx-field" style="font-size:20px"><b style="margin-right:10px">Currency:</b> {{booking.Client.ClientCurrency[0].CurrencyID }}</div>
		</div>
    </div>
  </div>
</template>

<script>
// import DxTextBox from 'devextreme-vue/text-box';

export default {
  name: "ClientComponent",
  props: ["booking"],
  components: {
    //DxTextBox
  }
};
</script>
