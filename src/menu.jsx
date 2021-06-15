import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './menu.css'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBars } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
               e.preventDefault();
                onClick(e);
            }}
        >
            <FontAwesomeIcon icon={faBars} className='bar-icon'/>
            &#x25bc;
            {children}
        </a>
    ));
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy, onClick }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

  return (
    <div className=''>
    <Nav variant="pills" activeKey="1">
    <Link to='/'>
    <FontAwesomeIcon icon={faGamepad} className='gamepad-icon'/>
    </Link>
       <Dropdown >
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"></Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu} >
                <Dropdown.Item >
                    Add new Game
                </Dropdown.Item>
                <Dropdown.Item >
                    Contact
                </Dropdown.Item>
                <Dropdown.Item >
                    <div className='language'>
                        <img src='/img/spain.png' alt='spanish' className='flag-image'/>
                        <img src='/img/uk.png' alt='english' className='flag-image'/>
                        <img src='/img/france.png' alt='french' className='flag-image'/>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Nav>
    </div>
  );
}

export default Menu;
