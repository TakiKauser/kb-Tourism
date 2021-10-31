import React from 'react';
import Events from '../../Events/Events';
import FaqPage from '../../Pages/FAQ/FaqPage';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Events></Events>
            <FaqPage></FaqPage>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;