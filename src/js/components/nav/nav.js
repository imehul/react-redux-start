import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class AppNav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Navbar>
        <Nav>
        <LinkContainer to="/">
          <NavItem eventKey={1} href="#">Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
          <NavItem eventKey={2} href="#">About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
          <NavItem eventKey={3} href="#">Contact</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNav;
