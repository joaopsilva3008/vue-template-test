<template>
    <div>
        <div class="row">
            <div class="box box-primary">
                <div class="box-body">
                    <div style="float:right;margin:20px 0">
                        <DxButton id="btn-save" 
                                text="Save" 
                                type="success"
                                styling-mode="contained"
                                :width="120"
                                @click="saveBooking"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="box box-primary">
                <div class="box-body">
                    <div id="longtabs">
                        <DxTabs :data-source="longtabs" 
                                :selected-index.sync="selectedIndex"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DxButton from 'devextreme-vue/button';
    import DxTabs from 'devextreme-vue/tabs';

    export default {
    components: {
            DxButton,
            DxTabs
    },
    data() {
        return {
        selectedIndex: 0,
        longtabs
        };
    },
    methods: {
        saveBooking() {
            alert('Hello world!')
        }
    },
    name: "BookingAIR"
    };

    export const longtabs = [
    { text: 'Client' },
    { text: 'Booking' },
    { text: 'Origin and Destination' },
    { text: 'Booking Detail' },
    { text: 'Shipments' },
    { text: 'Other Info' }
    ];

</script>
<style>
    .content{
        text-align: justify;
        margin-top: 25px;
    }

    #longtabs{
        margin-top: 20px;
    }

    #scrolledtabs {
        margin-top: 20px;
    }

    #tabs {
        margin-top: 60px;
    }

    .caption{
        font-size: 16px;
        padding-bottom: 3px;
        padding-left: 10px;
    }

    .left-aligned {
        text-align: left;
    }
</style>