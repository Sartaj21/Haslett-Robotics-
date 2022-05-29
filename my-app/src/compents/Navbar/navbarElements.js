import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #000;
    height: 80px;
    margin-top: --80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    postion: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transform: 0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const Navlogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`