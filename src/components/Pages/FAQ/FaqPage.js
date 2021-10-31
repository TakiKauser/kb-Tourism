import React from 'react';
import FAQ from '../../FAQ/FAQ';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const FaqPage = () => {
    return (
        <div>
            <Header></Header>
            <h3 className='my-4'>Frequently Asked Questions</h3>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default FaqPage;