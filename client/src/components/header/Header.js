import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './_header.scss';
import logo from './images/logo.png';

const Header = () => {
  return (
    <div id="main_header">
      {/* <div id="header_message">
        <p>
          FREE SHIPPING on orders over $35 / Subscribe to our newsletter for 15% OFF
        </p>
      </div> */}
      <Navbar id="navbar" collapseOnSelect fixedTop={true}  className="container-fluid">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
            <img id="logo" src={logo} alt="allthingsfrenchie logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/howloween'}>
              <NavItem eventKey={1}>HOWLOWEEN SHOP</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="SHOP" id="basic-nav-dropdown">
              <LinkContainer to={'/shop/women'}>
                <MenuItem eventKey={2.1}>WOMEN</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/shop/men'}>
                <MenuItem eventKey={2.2}>MEN</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/shop/bags_and_accessories'}>
                <MenuItem eventKey={2.3}>BAGS & ACCESSORIES</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/shop/jewelry'}>
                <MenuItem eventKey={2.4}>JEWELRY</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/shop/socks'}>
                <MenuItem eventKey={2.5}>SOCKS</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/shop/sales'}>
                <MenuItem eventKey={2.6}>SALES</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to={'/be_a_pup_star'}>
              <NavItem eventKey={3}>BE A PUP STAR</NavItem>
            </LinkContainer>

          </Nav>
          <Nav pullRight>
            <LinkContainer to={'/'}>
              <NavItem eventKey={1}>
                Cart <span className="glyphicon glyphicon-shopping-cart"></span>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
