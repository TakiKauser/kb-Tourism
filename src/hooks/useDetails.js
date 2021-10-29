import { useState } from 'react';
import { useEffect } from 'react';

const useDetails = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/temporaryData.json")
            .then(response => response.json())
            .then(jsonData => setDetails(jsonData));
    }, []);
    return [
        details
    ]
};

export default useDetails;