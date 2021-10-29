import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const useDetails = () => {
    const { eventId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/events/${eventId}`)
            .then(response => response.json())
            .then(jsonData => setItem(jsonData))
    }, [])
    return {
        item
    }
};

export default useDetails;