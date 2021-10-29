import React from 'react';
import { useForm } from 'react-hook-form';
import useDetails from '../../hooks/useDetails';
import './Booking.css';

const Booking = () => {
    const {item} = useDetails();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='form'>
            <h3>Booking {item.title}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="number" placeholder="Contact Number" {...register("Contact Number", { required: true, min: 11 })} />

                <input type="submit" value="Book this Event" />
            </form>
        </div>
    );
};

export default Booking;