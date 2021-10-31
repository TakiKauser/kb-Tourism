import { faCheck, faCheckDouble, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import useAllBookings from '../../hooks/useAllBookings';
import useAuth from '../../hooks/useAuth';

const ManageAllBookings = () => {
    const { allBookings, setAllBookings } = useAllBookings();
    const { user } = useAuth();

    const handleDeleteBooking = id => {
        const confirmation = window.confirm("Cancel booking & remove from list???");

        if (confirmation) {
            const url = `https://intense-springs-45537.herokuapp.com/myBookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(jsonData => {
                    console.log(jsonData);
                    if (jsonData.deletedCount) {
                        alert("Booking Canceled!");
                        const remainingMyBookings = allBookings.filter(booking => booking._id !== id);
                        setAllBookings(remainingMyBookings);
                    }
                });
        }
    };
    return (
        <div>
            <h2>Manage All Bookings as {user?.displayName}</h2>
            <Table className='table table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Event Title</th>
                        <th>Contact Number</th>
                        <th>Persons</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookings?.map((booking, index) => (
                            <tr key={booking?._id}>
                                <td>{index}</td>
                                <td>{booking?.name}</td>
                                <td>{booking?.title}</td>
                                <td>{booking?.contactNumber}</td>
                                <td>{booking?.person}</td>
                                <td><button onClick={() => handleDeleteBooking(booking?._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} className="text-white" /></button></td>
                                <td>
                                    <button className="btn btn-warning btn-sm"><FontAwesomeIcon icon={faCheck} className="text-white" /> Pending</button>
                                    <button className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCheckDouble} className="text-white" /> Approved</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllBookings;