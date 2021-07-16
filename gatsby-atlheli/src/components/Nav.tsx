import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const StyledNavBar = styled.nav`
    margin-bottom: 3rem;

    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
    }

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
