
import React from 'react';

const Footer = () => {
   
    const root = {
        marginTop: '20px',
    }
    return (
        <footer style={root}>
            &copy; PanchoProductions {new Date().getFullYear()}
        </footer>
    );

}

export default Footer;
