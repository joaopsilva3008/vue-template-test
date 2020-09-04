import API from "../../services/API";

const state = {
  loadingStatus: 'notLoading',
  booking: {}
};

const getters = {
  getBooking: state => state.booking,
  getLoadingStatus: state => state.loadingStatus

};

const actions = {
  // asynchronous
  async fetchBooking({commit}) {
	
	commit("SET_LOADING_STATUS", 'loading');

    await API.getBookingByNumber("2011916079")
      .then(response => {
		  commit("SET_LOADING_STATUS",'notLoading')
		  commit("SET_BOOKING", response.data);
      })
      .catch(error => console.log(error))
      .finally(() => console.log("End of getBookingByNumber()"));
  }
};

const mutations = {
	SET_LOADING_STATUS(state , status)
	{
		state.loadingStatus = status;
	},
	SET_BOOKING(state, data) {
		state.booking = data;
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
