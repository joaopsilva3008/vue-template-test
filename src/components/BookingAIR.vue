<template>
    <div>
		<div class="row">
            <div class="box box-primary">
                <div class="box-body">
					<DxButton id="button1" text="Save" @click="sayHelloWorld"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import DxButton from 'devextreme-vue/button';

export default {
  components: {
		DxButton
  },
  methods: {
      sayHelloWorld() {
          alert('Hello world!')
      }
  },
  name: "BookingAIR"
};

</script>