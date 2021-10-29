import { useState, useEffect } from 'react';

const useEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const url = `https://intense-springs-45537.herokuapp.com/events`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setEvents(jsonData));
    }, []);
    return {
        events
    }
};

export default useEvents;