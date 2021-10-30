import React from 'react';
import Mybookings from '../../MyBookings/Mybookings';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const MybookingPage = () => {
    return (
        <div>
            <Header></Header>
            <Mybookings></Mybookings>
            <Footer></Footer>
        </div>
    );
};

export default MybookingPage;