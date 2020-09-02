import API from '../../services/API'

const state = {
    booking: {}
};

const getters = {
    getBooking: state => state.booking
};

const actions = {
    // asynchronous
    async setBooking(state/*, payload*/){
        await API.getBookingByNumber("2011916079")
                 .then(response => state.commit('setCurrentBooking', response.data))
                 .catch(error => console.log(error))
                 .finally(() => console.log("End of call"));
    }
};

const mutations = {
    // synchronous
    setCurrentBooking(state, data) {
        state.booking = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}