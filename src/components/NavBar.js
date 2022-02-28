import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div className="container-fluid">
                < img className="logo" src={"img/logo.jpg"} alt="logo" />
                <Navbar className="hamburger" collapseOnSelect expand="lg">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <ul className="navbar-nav" id="navigationLinks">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/countdown" className="nav-link">Countdown</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>

                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header >
    );
}
