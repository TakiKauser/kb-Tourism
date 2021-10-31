import { faCheck, faCheckDouble, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
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
                        alert("Booking Canceled!");
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
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    myBookings.length === 0 ?
                        <Spinner animation="grow" variant="dark" />
                        :
                        <tbody>
                            {
                                myBookings?.map((booking, index) => (
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
                }

            </Table>
        </div>
    );
};

export default Mybookings;