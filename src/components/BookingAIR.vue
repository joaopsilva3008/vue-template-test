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
                                @click="switchTabs(longtabs.id)"
                        />
                    </div>
                    <div id="tab-client" class="dxTabStyle" v-if="selectedIndex == 0">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-user bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div id="tab-booking" class="dxTabStyle" v-if="selectedIndex == 1">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-clipboard-list bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div id="tab-origin-destination" class="dxTabStyle" v-if="selectedIndex == 2">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-map-marker-alt bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div id="tab-booking-detail" class="dxTabStyle" v-if="selectedIndex == 3">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-pallet-alt bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div id="tab-shipments" class="dxTabStyle" v-if="selectedIndex == 4">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-conveyor-belt-alt bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div id="tab-other-info" class="dxTabStyle" v-if="selectedIndex == 5">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-file-invoice bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div id="tab-revenue-costs" class="dxTabStyle" v-if="selectedIndex == 6">
                        <div class="box-header ui-sortable-handle">
                            <i class="far fa-coins bkg-icon-left-menu" style="margin-right:10px"></i>
                            <h3 class="box-title">{{longtabs[selectedIndex].text}}</h3>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li v-for="team in teams" :key="team.ID" v-text="team.Description"></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DxButton from 'devextreme-vue/button';
    import DxTabs from 'devextreme-vue/tabs';
    import API from '../services/API'

    export default {
    components: {
                DxButton,
                DxTabs
        },
        data() {
            return {
                selectedIndex: 0,
                longtabs,
                teams: null
            };
        },
         mounted: function() {
                API.getTeams(2)
                   .then(response =>{this.teams = response.data.data ; console.log(response)} )
                   .catch(error => console.log(error))
                   .finally(() => console.log("End of call"));
        },
        methods: {
            saveBooking() {
                alert('Hello world!')
            },
            switchTabs(id){
                console.log(id)
            }
        },
        name: "BookingAIR"
    };

    export const longtabs = [
        { text: 'Client',id: 1 },
        { text: 'Booking',id: 2 },
        { text: 'Origin and Destination',id: 3 },
        { text: 'Booking Detail',id: 4 },
        { text: 'Shipments',id: 5 },
        { text: 'Other Info',id: 6 },
        { text: 'Revenue and Costs',id: 7 }
    ];

</script>