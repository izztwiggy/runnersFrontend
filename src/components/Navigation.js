import {useState, useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap/'
import {theme}from '../styles/theme'
import axios from 'axios'
import UserContext from '../UserContext'


const Navigation = () => {
  const navigate = useNavigate()
  const {user} = useContext(UserContext)

  const handleLogout = async() => {
    try{
      let logginOut = await axios.get('http://localhost:4600/sessions/logout')
      if(logginOut) console.log('Successfully Logged Out')
      navigate('/')
    }catch(err){
      console.error(err)
    }
  }

  return (<>
    <Navbar className="topNav" bg="dark" variant="dark" expand="md" sticky="top">
      <Container className="navContainer" fluid>
        <Navbar.Brand as={Link} to="/">RUNNERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          className={ user ? "me-auto my-2 my-lg-0" : "justify-content-end"}
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
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