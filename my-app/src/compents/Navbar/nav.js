import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLink} from './navbarElements';


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <Navlogo>HRC</Navlogo>
              
                <NavMenu>
                  <NavItem>
                    <NavLink to="/About">About</NavLink>
                    <NavLink to="/Events">Events</NavLink>
                    <NavLink to="/Join">Join</NavLink>
                    <NavLink to="/Teams">Teams</NavLink>
                  </NavItem>
                  <MobileIcon>
                    <FaBars />

                  </MobileIcon>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar