import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://intense-springs-45537.herokuapp.com/myBookings/${user?.email}`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                setMyBookings(jsonData);
            });
    }, []);
    return {
        myBookings
    }
};

export default useMyBookings;