import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #333;
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

`
export const Navlogo = styled.h1`
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    margin-left: 2rem;
    font-family: 'Roboto', sans-serif;
`
export const MobileIcon = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 100%;
    @media (max-width: 768px) {
        display: none;
    }

`
export const NavItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-left: 0rem;
`
export const NavLink = styled(LinkR)`
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    padding: 0 1rem;
    text-decoration: none;
    margin-left: 2rem;
    font-family: 'Larsseit,Sohne,Roboto', sans-serif;
    &:hover {
        color: #fff;
        text-decoration: underline;
    }

`
export const Link = styled(LinkS)`
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    padding: 0 1rem;
    text-decoration: none;
    margin-left: 2rem;
    font-family: 'Larsseit,Sohne,Roboto', sans-serif;
    &:hover {
        color: #fff;
        text-decoration: underline;
    }
`
export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        display: none;
    }
`