import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useDetails from '../../hooks/useDetails';
import './Booking.css';

const Booking = () => {
    const { item } = useDetails();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://intense-springs-45537.herokuapp.com/event/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert("Your booking is successful.");
                    reset();
                }
            })
        console.log(data);
    };
    // console.log(errors);
    // console.log(user);
    return (
        <div className='form'>
            <h3>Booking {item.title}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <input type="text" defaultValue={item.title} placeholder="Event Title" {...register("title", { required: true, maxLength: 80 })} readOnly />
                {errors.title && <span>Name field is required</span>}

                <input type="text" defaultValue={user.displayName} placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                {errors.name && <span>Name field is required</span>}

                <input type="text" defaultValue={user.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Email field is required</span>}

                <input type="number" placeholder="Contact Number" {...register("contactNumber", { required: true, min: 11 })} />
                {errors.contactNumber && <span>Contact Number field is required</span>}

                <input type="number" defaultValue="1" placeholder="Person" {...register("person", { required: true, min: 1 })} />
                {errors.person && <span>Person field is required</span>}

                <input type="datetime" defaultValue={new Date()} placeholder="Date" {...register("date", { required: true })} readOnly />

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