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
                            {/* <NavLink to="/booking" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Booking</NavLink> */}
                            <NavLink to="/about" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">About</NavLink>
                            <NavLink to="/contact" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">Contact</NavLink>
                            <NavLink to="/faq" activeStyle={{ fontWeight: 'bold', borderBottom: "2px solid black" }} className="navlink">FAQ</NavLink>
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
                                    <NavDropdown.Item><NavLink to={`/myBookings/${user?.email}`} className="login-menu-link"><FontAwesomeIcon icon={faCheck} />  My Bookings</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/manageAllBookings" className="login-menu-link"><FontAwesomeIcon icon={faTasks} />  Manage Bookings</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/addEvent" className="login-menu-link"><FontAwesomeIcon icon={faPlusSquare} />  Add an Event</NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} />  Sign Out</NavDropdown.Item>
                                </NavDropdown>
                                // <Button variant='secondary' onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} />  Sign Out</Button>
                                :
                                <Navbar.Text>
                                    <NavLink to="/login" className="fw-bold login-menu-link">Sign In</NavLink>
                                </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;