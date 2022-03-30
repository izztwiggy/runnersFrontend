import {useState, useContext} from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap/'
import {theme}from '../styles/theme'
import axios from 'axios'
import UserContext from '../UserContext'


const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {user, logout} = useContext(UserContext)

  const handleLogout = async() => {
    try{
      logout()
      navigate('/')
    }catch(err){
      console.error(err)
    }
  }

  return (<>
    <Navbar className="topNav" bg="dark" variant="dark" expand="md" sticky="top">
      <Container className="navContainer" fluid>
        <Navbar.Brand as={Link} to="/">RUNCO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          className={ user ? "me-auto my-2 my-lg-0" : "justify-content-end"}
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          {user && <>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/swipe">Swipe</Nav.Link>
            <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
            <Nav.Link as={Link} to="/routes">Routes</Nav.Link>
            <Nav.Link as={Button} variant={"outline-dark"} onClick={handleLogout}> Logout </Nav.Link>
          </>}
          {!user && <>
            <Nav.Link as={Link} to="/"> About </Nav.Link>
            <Nav.Link as={Link} to="/auth"> Login or Register</Nav.Link>
          </>}
        </Nav>
        {user && 
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        }
        </Navbar.Collapse>
      </Container>
</Navbar>
  
  
  </>  
  )
}

export default Navigation