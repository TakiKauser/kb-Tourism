import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddEvent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const url = `https://intense-springs-45537.herokuapp.com/event`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert("Event is added successfully.");
                    reset();
                }
            });
        console.log(data);
    };
    return (
        <div className='form'>
            <h3>Add Event</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <input type="text" placeholder="Event Title" {...register("title", { required: true, maxLength: 80 })} />
                {errors.title && <span>Name field is required</span>}

                <input type="text" placeholder="Spot/Location" {...register("location", { required: true, maxLength: 80 })} />
                {errors.location && <span>Location field is required</span>}

                <input type="text" placeholder="Image Link" {...register("image", { required: true, maxLength: 80 })} />
                {errors.image && <span>Image URL is required</span>}

                <input type="text" placeholder="Description" {...register("description", { required: true, maxLength: 300 })} />
                {errors.description && <span>Description is required</span>}

                <input type="number" placeholder="Cost (in $)" {...register("cost", { required: true, min: 11 })} />
                {errors.cost && <span>Event's cost is required</span>}

                <input type="number" placeholder="Tour Duration (in days)" {...register("duration", { required: true, min: 1 })} />
                {errors.duration && <span>Event duration is required</span>}

                <input type="number" placeholder="Tourists (in Person)" {...register("tourists", { required: true, min: 1 })} />
                {errors.tourists && <span>Approximate tourists count is required</span>}

                <input type="text" defaultValue={user.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} readOnly />
                {errors.email && <span>Email field is required</span>}
                <input type="submit" value="Add Event" />
            </form>
        </div>
    );
};

export default AddEvent;