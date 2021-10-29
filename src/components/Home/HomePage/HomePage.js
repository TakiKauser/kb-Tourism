import React from 'react';
import Events from '../../Events/Events';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Events></Events>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;