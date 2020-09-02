import { instance } from './config'

export default{

    getBookingByNumber: (bookingNumber)=> {
        return instance.get('/Booking/GetBookingByNumber'
                        , {
                            params: {
                                _bookingNumber: bookingNumber
                           }
                })
    } 
}