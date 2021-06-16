import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './menu.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBars } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <Navbar sticky="top" collapseOnSelect  bg="light" expand="lg">
    <Navbar.Brand>
    <Link to='/'>
    <FontAwesomeIcon icon={faGamepad} className='gamepad-icon'/>
    </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" sticky="top" >
    <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"> Add new Game</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
            <div className='language'>
                <img src='/img/spain.png' alt='spanish' className='flag-image'/>
                <img src='/img/uk.png' alt='english' className='flag-image'/>
                <img src='/img/france.png' alt='french' className='flag-image'/>
            </div></NavDropdown.Item>
      </NavDropdown>
      </Nav>
    <Nav>
     <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-secondary">Search</Button>
    </Form>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
