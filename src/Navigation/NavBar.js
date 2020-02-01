import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from './routes';
import './bootstrap.css'

const MenuNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">
          Blog System w/out Authentication
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="shift"><Link to={ROUTES.HOME}>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="shift"><Link to={ROUTES.NEW_POST}>Create New Post</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuNav;