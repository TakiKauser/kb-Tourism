import React from 'react';
import useAuth from '../../hooks/useAuth';
import useMyBookings from '../../hooks/useMyBookings';

const Mybookings = () => {
    const { user } = useAuth();
    const { myBookings } = useMyBookings();
    console.log(myBookings);
    return (
        <div>
            <h2>{user.displayName} bookings</h2>
            <h3>{myBookings.length}</h3>
            {
                myBookings.map(booking => <div key={booking._id}>
                    <h3>{booking.name}</h3>
                    <h4>{booking.contactNumber}</h4>
                    <h5>{booking.person}</h5>
                    <h5>{booking.date}</h5>
                </div>)
            }

        </div>
    );
};

export default Mybookings;