import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="pt-5 pb-5 footer-cta">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>57/E, Dhanmondi, Dhaka.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+02 087423</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FontAwesomeIcon className="contact-icon" icon={faEnvelopeOpen} />
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>kb.tourism@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 footer-content">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="text-white">
                                        <h1>kb-Tourism</h1>
                                    </div>
                                    <div className="footer-text">
                                        <p>Tourism Products are a combination of goods and services demanded by a tourist during travel to and stay at a destination. These include natural, cultural and manmade attractions and facilities such as hotels, transport and ancillary services. The attraction is the core product in a destination.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <FontAwesomeIcon icon={faFacebook} className='mx-3 text-white fa-2x' />
                                        <FontAwesomeIcon icon={faTwitter} className='mx-3 text-white fa-2x' />
                                        <FontAwesomeIcon icon={faGoogle} className='mx-3 text-white fa-2x' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="https://github.com/TakiKauser">Home</a></li>
                                        <li><a href="https://github.com/TakiKauser">About</a></li>
                                        <li><a href="https://github.com/TakiKauser">Events</a></li>
                                        <li><a href="https://github.com/TakiKauser">Guides</a></li>
                                        <li><a href="https://github.com/TakiKauser">Spots</a></li>
                                        <li><a href="https://github.com/TakiKauser">Contact</a></li>
                                        <li><a href="https://github.com/TakiKauser">Blogs</a></li>
                                        <li><a href="https://github.com/TakiKauser">Feedbacks</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i><FontAwesomeIcon icon={faPaperPlane} /></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="text-center col-xl-6 col-lg-6 text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2021, All Right Reserved <a href="https://codepen.io/anupkumar92/">Taki Kauser</a></p>
                                </div>
                            </div>
                            <div className="text-right col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="https://www.facebook.com">Home</a></li>
                                        <li><a href="https://www.facebook.com">Terms</a></li>
                                        <li><a href="https://www.facebook.com">Privacy</a></li>
                                        <li><a href="https://www.facebook.com">Policy</a></li>
                                        <li><a href="https://www.facebook.com">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;