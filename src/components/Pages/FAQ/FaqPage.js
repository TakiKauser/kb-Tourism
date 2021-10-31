import React from 'react';
import FAQ from '../../FAQ/FAQ';

const FaqPage = () => {
    return (
        <div className='container'>
            <h3 className='my-4'>Frequently Asked Questions</h3>
            <div className=' row'>
                <div className='mb-5 col-md-5 col-sm-12'>
                    <FAQ></FAQ>
                </div>
                <div className='p-5 col-md-7 col-sm-12'>
                    <img src="https://i.ibb.co/12Wj8qW/p-grapher.jpg" alt="capturer" className='img-fluid' />
                    <h3 className='my-5'>Experince the world with your valuable time.</h3>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;