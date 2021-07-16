import React from 'react'
import Nav from './Nav';
import Footer from './Footer';


// Styling
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';

interface Props {
    children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            {/* <GlobalStyles /> */}
            <Nav />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
