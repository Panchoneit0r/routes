import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {

    const {title} = props;

    return ( 
        <header className="App-header">

            <Navbar >
                <Container className="nav0">
                    <Nav className="nav1">
                    <Navbar.Brand ><img src={logo} className="App-logo" alt="logo"/></Navbar.Brand>
                    <Navbar.Brand ><h1>{title}</h1></Navbar.Brand>
                    </Nav>    
                    <Nav className="nav2">
                        <Nav.Link href="/"><p> Home </p></Nav.Link>
                        <Nav.Link href="/about"><p> About </p></Nav.Link>
                        <Nav.Link href="/notes"><p> Notes </p></Nav.Link>
                        <Nav.Link href="/contact"><p>Contact </p></Nav.Link>
                    </Nav>   
                </Container>
            </Navbar>
           
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

export default Header;
