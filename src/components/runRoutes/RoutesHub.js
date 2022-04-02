import {useState, useEffect} from 'react'
import NewRoute from './NewRoute'
import useAuth from '../../hooks/useAuth'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import RouteCard from './RouteCard'
import axios from 'axios'


const Routes = () => {
  const {baseUrl} = useAuth()

  const [allRoutes, setAllRoutes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(true);
  }
  const handleDislike = () => {
    console.log('X - DONT LIKE ')
  }
  const handleLike = () => {
    console.log('Send A Match Request!')
  }

  const getRoutes = async() => {
     
      const userStored = JSON.parse(localStorage.getItem('user'))
      const config = {
        headers: { Authorization: `Bearer ${userStored.token}` }
      }
      let base = `${baseUrl}/routes`
      const fetchRoutes = await axios.get(base, config)
      console.log(fetchRoutes.data)
      fetchRoutes && setAllRoutes( fetchRoutes.data)
  }

  useEffect(()=> {
    getRoutes()
  }, [])
  
  return (
    <Container className="routesPage" fluid>
      <h3>Routes</h3>
      <NewRoute />
      {allRoutes?.allRoutes.map((route) => {
        <RouteCard 
          route={route}
          handleShow={handleShow} 
          handleDislike={handleDislike}
          handleLike={handleLike}
        />
      })}
  
    </Container>
  )
}

export default Routes