import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../styles/theme'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import UserContext from '../UserContext'


const Footer = () => {
    const { user } = useContext(UserContext)
  return (<>
  <Navbar className='footerNav' fixed="bottom">
    <Container fluid>
        <h3>Runners 2022</h3>
        <Nav>
            <Nav.Link as={Link} to="/"> About </Nav.Link>
            <Nav.Link as={Link} to="/safety">Safety</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            
        {user ? <Nav.Link as={Link} to="/logout">Logout</Nav.Link> : <Nav.Link as={Link} to="/auth"> Login or Register</Nav.Link> }
        {user && <Nav.Link as={Link} to="/routes">Routes</Nav.Link>}
        {user && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
            
        </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Footer