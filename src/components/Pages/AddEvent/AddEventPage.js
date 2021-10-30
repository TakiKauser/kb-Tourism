import React from 'react';
import AddEvent from '../../AddEvent/AddEvent';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const AddEventPage = () => {
    return (
        <div>
            <Header></Header>
            <AddEvent></AddEvent>
            <Footer></Footer>
        </div>
    );
};

export default AddEventPage;