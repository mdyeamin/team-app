import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './NavBar.css'
import logo from '../../img/logo.png'
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
const NavBar = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar style={{ backgroundColor: "#131A25" }} collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" style={{ textDecoration: "none" }}>   <img style={{ textDecoration: "none", height: "60px" }} src={logo} alt="" /> <span style={{ color: "white" }}>West More Land's</span> </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: "#6F8C88" }} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="navbarlink">

                            {user?.email && <NavLink eventKey={2} to="/dashboard">
                                <button> DashBoard</button>
                            </NavLink>}
                            {
                                user?.email ?
                                    <button className="log-btn" onClick={logOut}>Logout <FiLogOut className="log" /></button>
                                    :
                                    <NavLink eventKey={2} to="/login">
                                        <button className="log-btn">login <FiLogIn className="log" /></button>
                                    </NavLink>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className="navuser">
                    <img src={user.photoURL} alt="" />
                    <span className="text-white">{user.displayName}</span>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;