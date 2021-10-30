import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useMyBookings from '../../hooks/useMyBookings';

const Mybookings = () => {
    const { user } = useAuth();
    const { myBookings, setMyBookings } = useMyBookings();

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
                        alert("Bokking Canceled!");
                        const remainingMyBookings = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(remainingMyBookings);
                    }
                });
        }
    };
    return (
        <div>
            <h2>{user.displayName}'s Booked Events </h2>

            <Table className='table table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Event Title</th>
                        <th>Contact Number</th>
                        <th>Persons</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    myBookings?.map((booking, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{booking?.name}</td>
                                <td>{booking?.title}</td>
                                <td>{booking?.contactNumber}</td>
                                <td>{booking?.person}</td>
                                <td><button onClick={() => handleDeleteBooking(booking?._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} className="text-white" /></button></td>
                            </tr>
                        </tbody>
                    ))}
            </Table>
        </div>
    );
};

export default Mybookings;