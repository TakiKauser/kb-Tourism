import { useState } from 'react';
import { useEffect } from 'react';

const useAllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        const url = `https://intense-springs-45537.herokuapp.com/manageAllBookings`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setAllBookings(jsonData);
            })
    }, []);
    return {
        allBookings
    }
};

export default useAllBookings;