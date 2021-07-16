import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const StyledNavBar = styled.nav`
    background: #F8FF00;
    color: black;
    font-size: 2em;

`;

interface Props {

}

const Nav: React.FC = (props: Props) => {
    return (
        <StyledNavBar>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/charters-tours">Charters - Tours</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </StyledNavBar>
    )
}

export default Nav;
