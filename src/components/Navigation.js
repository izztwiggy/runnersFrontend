import {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap/'
import axios from 'axios'

const theme = {
  highlight: '#DCEBD7',
  nav: '#EF482D',
  topNav: '#FDD73C',
  background: '#FFE6BC',
  canyonSky: '#0073A1',
  canyon:'#CA6D52',
  shrubGreen: '#4C4026'

}


const Navigation = () => {
  const navigate = useNavigate()

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
    <Navbar className="topNav" bg="dark" variant="dark" expand="xl">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">RUNNERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/swipe">Swipe</Nav.Link>
            <Nav.Link as={Link} to="/matches">Matches</Nav.Link>
            <Nav.Link as={Link} to="/routes">Routes</Nav.Link>

            <Nav.Link as={Link} to="/auth"> Login or Register</Nav.Link>
            <Nav.Link as={Link} to="/"> About </Nav.Link>
            <Nav.Link as={Button} variant={"outline-dark"} onClick={handleLogout}> Logout </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
</Navbar>
  
  
  </>  
  )
}

export default Navigation