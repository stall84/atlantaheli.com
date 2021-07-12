import React from 'react';
import { Link } from 'gatsby';

interface Props {
    
}

const Nav: React.FC = (props: Props) => {
    return (
        <nav>
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
        </nav>
    )
}

export default Nav;
