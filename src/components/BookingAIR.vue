<template>
    <div>
        <h1>{{ msg }}</h1>
        <DxButton id="button1" text="Save" @click="sayHelloWorld"/>
        <div class="row">
            <div class="box box-primary">
                <div class="box-body">
                    <DxDataGrid
                      :data-source="dataSource"
                      :columns="columns"
                      :show-borders="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DxButton from 'devextreme-vue/button';
import DxDataGrid from 'devextreme-vue/data-grid';

export const customers = [{
  'ID': 1,
  'Container': 'PALLETE(S)',
  'Taxable Weight': '18.200',
  'Quantity': 26,
  'Lenght': 100,
  'Width': 120,
  'Height': 120,
  'Weight': 500,
  'Total Weight': 500,
  'Volume':1,
  'LDM': 1.25,
  'LDM Agent': 1.50,
  'Stacking Rules': 'NOT ALLOWED'
}, {
  'ID': 2,
  'Container': 'PALLETE(S)',
  'Taxable Weight': '18.200',
  'Quantity': 26,
  'Lenght': 100,
  'Width': 120,
  'Height': 120,
  'Weight': 500,
  'Total Weight': 500,
  'Volume':1,
  'LDM': 1.25,
  'LDM Agent': 1.50,
  'Stacking Rules': 'NOT ALLOWED'
}, {
  'ID': 3,
  'Container': 'PALLETE(S)',
  'Taxable Weight': '18.200',
  'Quantity': 26,
  'Lenght': 100,
  'Width': 120,
  'Height': 120,
  'Weight': 500,
  'Total Weight': 500,
  'Volume':1,
  'LDM': 1.25,
  'LDM Agent': 1.50,
  'Stacking Rules': 'NOT ALLOWED'
}, {
  'ID': 4,
  'Container': "PALLETE(S)",
  'Taxable Weight': '18.200',
  'Quantity': 26,
  'Lenght': 100,
  'Width': 120,
  'Height': 120,
  'Weight': 500,
  'Total Weight': 500,
  'Volume':1,
  'LDM': 1.25,
  'LDM Agent': 1.50,
  'Stacking Rules': 'NOT ALLOWED'
}, {
  'ID': 5,
  'Container': 'PALLETE(S)',
  'Taxable Weight': '18.200',
  'Quantity': 26,
  'Lenght': 100,
  'Width': 120,
  'Height': 120,
  'Weight': 500,
  'Total Weight': 500,
  'Volume':1,
  'LDM': 1.25,
  'LDM Agent': 1.50,
  'Stacking Rules': 'NOT ALLOWED'
}];

export default {
  components: {
        DxButton,
        DxDataGrid
  },
  methods: {
      sayHelloWorld() {
          alert('Hello world!')
      }
  },
  data() {
    return {
      dataSource: customers,
      columns: ['ID','Container','Taxable Weight','Quantity','Lenght','Width','Height','Weight','Total Weight','Volume','LDM','LDM Agent','Stacking Rules']
    };
  },
  name: "BookingAIR"
};

</script>