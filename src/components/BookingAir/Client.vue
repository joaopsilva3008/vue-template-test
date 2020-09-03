.<template>
    <div>
        <div class="tab-container-header">
            <i class="far fa-user bkg-icon-left-menu" style="margin-right:10px"></i>
            <h3 class="box-title">Client</h3>
        </div>
        <div class="tab-container-body" v-if="booking != null">
            <div class="dx-fieldset">
                <div class="dx-field">
                    <div class="dx-field-label">Client Name</div>
                    <div class="dx-field-value">
                        <DxTextBox :value="booking.Client.ClientName"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//import DxTextBox from 'devextreme-vue/text-box';

    export default {
        name:"ClientComponent",
        props: ['booking'],
        components:{
            //DxTextBox
        }
    }
</script>
