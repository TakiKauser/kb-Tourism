import React from 'react';
import Booking from '../../Booking/Booking';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const BookingPage = () => {
    return (
        <div>
            <Header></Header>
            <Booking></Booking>
            <Footer></Footer>
        </div>
    );
};

export default BookingPage;