import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
// import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='not-found d flex justify-content-center align-items-center'>
            {/* <img src={notFound} alt="404" width="100%" /> */}
            <Link to="/"><button className='btn-danger rounded p-2 my-5'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;