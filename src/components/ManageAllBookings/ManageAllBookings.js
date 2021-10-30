import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import useAllBookings from '../../hooks/useAllBookings';

const ManageAllBookings = () => {
    const { allBookings } = useAllBookings();
    return (
        <div>
            <h2>Manage All Bookings</h2>
            <Table className='table table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Event Title</th>
                        <th>Contact Number</th>
                        <th>Persons</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    allBookings?.map((booking, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{booking?.name}</td>
                                <td>{booking?.title}</td>
                                <td>{booking?.contactNumber}</td>
                                <td>{booking?.person}</td>
                                <td>
                                    {/* <button className="btn btn-warning btn-sm"><FontAwesomeIcon icon={faCheck} className="text-white" /> Pending</button> */}
                                    <button className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faCheckDouble} className="text-white" /> Approved</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </Table>
            {/* <h3>{allBookings.length}</h3>
            {
                allBookings.map(singleBooking => <div
                    key={singleBooking._id}
                >
                    <h2>{singleBooking.name}</h2>
                </div>)
            } */}
        </div>
    );
};

export default ManageAllBookings;