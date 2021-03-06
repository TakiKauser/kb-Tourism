import React from 'react';
import Events from '../../Events/Events';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const EventsPage = () => {
    return (
        <div>
            <Header></Header>
            <Events></Events>
            <Footer></Footer>
        </div>
    );
};

export default EventsPage;