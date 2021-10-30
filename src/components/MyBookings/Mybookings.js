import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useMyBookings from '../../hooks/useMyBookings';

const Mybookings = () => {
    const { user } = useAuth();
    const { myBookings } = useMyBookings();
    console.log(myBookings);
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
                                <td><button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} className="text-white" /></button></td>
                            </tr>
                        </tbody>
                    ))}
            </Table>
        </div>
    );
};

export default Mybookings;