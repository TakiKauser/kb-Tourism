import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useDetails from '../../hooks/useDetails';
import { useHistory } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const history = useHistory();
    const { item } = useDetails();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        fetch(`https://intense-springs-45537.herokuapp.com/event/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your booking is successful.");
                    reset();
                    history.push('/myBookings');
                }
            })
    };
    return (
        <div className='form'>
            <h3>Booking {item.title}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                {item.title && <input type="text" defaultValue={item.title} placeholder="Event Title" {...register("title", { required: true, maxLength: 80 })} readOnly />}
                {errors.title && <span>Event Title field is required</span>}

                <input type="text" defaultValue={user.displayName} placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                {errors.name && <span>Name field is required</span>}

                <input type="email" defaultValue={user.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Email field is required</span>}

                <input type="number" placeholder="Contact Number" {...register("contactNumber", { required: true, min: 11 })} />
                {errors.contactNumber && <span>Contact Number field is required</span>}

                <input type="number" defaultValue="1" placeholder="Person" {...register("person", { required: true, min: 1 })} />
                {errors.person && <span>Person field is required</span>}

                <input type="date"{...register("date", { required: true })} />

                <input type="submit" value="Book this Event" />
            </form>
            <div className="details-card cart">
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
                <hr />
                <img src={item?.image} alt="event-spot" className="img-fluid" />
            </div >
        </div>
    );
};

export default Booking;