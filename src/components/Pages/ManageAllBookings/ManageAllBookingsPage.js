import React from 'react';
import ManageAllBookings from '../../ManageAllBookings/ManageAllBookings';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ManageAllBookingsPage = () => {
    return (
        <div>
            <Header></Header>
            <ManageAllBookings></ManageAllBookings>
            <Footer></Footer>
        </div>
    );
};

export default ManageAllBookingsPage;