import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logoDorado.png'
import { useState } from 'react';

function NavBar() {
 
  const [ color, setColor ]= useState ( false)
  function changeColor() {
    
  
    if (window.scrollY >= 90) {
  
      setColor(true);
    }
    else {
      setColor(false);
    }
  }
    window.addEventListener ( 'scroll', changeColor)

  
  return (
    <Navbar collapseOnSelect expand="lg" className={color ?' Navbar  navbar-bg': 'Navbar'} id='Navbar'>
      <Container>
        <Navbar.Brand href="#home" className='d-lg-none  Navbar-brand' ><img className='logoNavbar ' src="https://trello.com/1/cards/6526de440f26969756dd32b7/attachments/65292296fac4b5aac1385218/previews/65292297fac4b5aac1385470/download/Viva_Glow.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className=" nav ">
            <Nav.Link href="#features" className='navlink '>Features</Nav.Link>
            <Nav.Link href="#pricing" className='navlink '>Pricing</Nav.Link>

            <Navbar.Brand href="#home "><img className='logoNavbar d-lg-block d-none ' src="https://trello.com/1/cards/6526de440f26969756dd32b7/attachments/65292296fac4b5aac1385218/previews/65292297fac4b5aac1385470/download/Viva_Glow.png" alt="" /></Navbar.Brand>
            
            <Nav.Link href="#features" className='navlink '>Features</Nav.Link>
            <Nav.Link href="#pricing" className='navlink '>Pricing</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;