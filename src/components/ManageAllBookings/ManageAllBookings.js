import React from 'react';
import useAllBookings from '../../hooks/useAllBookings';

const ManageAllBookings = () => {
    const { allBookings } = useAllBookings();
    return (
        <div>
            <h2>Manage All Bookings</h2>
            <h3>{allBookings.length}</h3>
            {
                allBookings.map(singleBooking => <div
                    key={singleBooking._id}
                >
                    <h2>{singleBooking.name}</h2>
                </div>)
            }
        </div>
    );
};

export default ManageAllBookings;