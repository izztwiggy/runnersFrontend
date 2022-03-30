import { useState, useContext, useEffect} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { theme } from '../styles/theme'
import pointUp from '../images/icons/pointUp.svg'
import logo from '../images/icons/alt_runcoLogo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import UserContext from '../UserContext'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'




const Footer = () => {
    const { user } = useContext(UserContext)
    const location = useLocation()
    const [scrollDir,setScrollDir] = useState(false)

    useEffect(() => {
      let threshold = 0
      let lastScrollY = window.scrollY
      let ticking = false
      const updateScrollDir = ()=> {
        const newScrollY = window.scrollY
        if(Math.abs(newScrollY - lastScrollY) < threshold){
          ticking = false
          return 
        }
        setScrollDir(newScrollY > lastScrollY ? true : false);
        lastScrollY = newScrollY > 0 ? newScrollY : 0;
        ticking = false;
      }
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir])
    
    const sendToTop = () => {
      window.scrollTo({top: 0})
    }

  return (<>
  <Navbar className='footerNav' fixed="bottom">
    <Button onClick={sendToTop} className="scrollUpBtn" variant="outline-none" style={{height: '4rem', width:'4rem'}}>
      {scrollDir && <Image src={pointUp} style={{height: '100%', width:'100%', margin: '0 auto'}} alt="arrowUp"/>}
    </Button>
    <Container fluid>
        <h3>RunCo</h3>
        <Nav>
            <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/"> About </Nav.Link>
            <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/safety">Safety</Nav.Link>
            <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/resources">Resources</Nav.Link>
            <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/contact">Contact Us</Nav.Link>
            
        {user ? 
        <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/logout">Logout</Nav.Link> : 
        <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/auth"> Login or Register</Nav.Link> 
        }
        {user && <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/routes">Routes</Nav.Link>}
        {user && <Nav.Link style={({isActive}) => ({color: isActive ? 'white' : 'lightGray'})} as={NavLink} to="/profile">Profile</Nav.Link>}
        </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Footer