import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Apple Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><NavLink to="/" className={"text-muted"}>Главная</NavLink></Nav.Link>
                        <Nav.Link> <NavLink to="/products" className={"text-muted"}>Товары</NavLink></Nav.Link>
                        <Nav.Link href="#link" className={"text-muted"}>Корзина</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;