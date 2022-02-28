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
                                    <Link to="home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="about">About</Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Nav.Link className="nav-link" href="#features">Event</Nav.Link>
                                </li>
                                <li className="nav-item">
                                    <Nav.Link className="nav-link" href="#features">About</Nav.Link>
                                </li> */}
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header >
    );
}
