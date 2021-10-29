import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const useDetails = () => {
    const { eventId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://intense-springs-45537.herokuapp.com/events/${eventId}`)
            .then(response => response.json())
            .then(jsonData => setItem(jsonData))
    }, [])
    return {
        item
    }
};

export default useDetails;