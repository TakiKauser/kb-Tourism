import { faCheck, faPlusSquare, faSignOutAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { NavHashLink } from 'react-router-hash-link';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand className='fw-bold'>
                        <img
                            alt="logo"
                            src="/logo.png"
                            width="80"
                            height="40"
                            className="align-top d-inline-block"
                        />{' '}
                        kb-Tourism
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/home" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Home</NavLink>
                            <NavLink to="/events" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Events</NavLink>
                            {/* <NavLink to="/experts" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Experts</NavLink> */}
                            {/* <NavLink to="/booking" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Booking</NavLink> */}
                            <NavLink to="/about" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">About</NavLink>
                            <NavLink to="/contact" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            user?.email && <img src={user?.photoURL} alt="profile" width="50" height="50" className='dp-img me-3' />
                        }
                        <Navbar.Text>
                            {/* <a href="/" className='user-name'>{user?.displayName}</a> */}
                            <NavLink to="/" className="login-menu-link">{user?.displayName}</NavLink>
                        </Navbar.Text>
                        {
                            user?.email ?
                                <NavDropdown
                                    id="nav-dropdown-light-example"
                                    title="Profile"
                                    menuVariant="light"
                                >
                                    <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faCheck} />  My Bookings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><FontAwesomeIcon icon={faTasks} />  Manage Bookings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><FontAwesomeIcon icon={faPlusSquare} />  Add an Event</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} />  Sign Out</NavDropdown.Item>
                                </NavDropdown>
                                // <Button variant='secondary' onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} />  Sign Out</Button>
                                :
                                <Navbar.Text>
                                    <NavLink to="/login" className="login-menu-link">Sign In</NavLink>
                                </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;