import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    console.log(location?.state?.from);

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className='login-area d-flex justify-content-center align-items-center flex-column'>
            <div className='login-card p-2'>
                <h2 className='text-secondary'>Sign In</h2>
                <button className='btn-light p-2 mt-5' onClick={handleGoogleLogIn}><FontAwesomeIcon icon={faGoogle} />  Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;