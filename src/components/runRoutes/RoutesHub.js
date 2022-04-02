import {useState, useEffect} from 'react'
import NewRoute from './NewRoute'
import useAuth from '../../hooks/useAuth'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import axios from 'axios'


const Routes = () => {
  const [allRoutes, setAllRoutes] = useState([])
  const {url} = useAuth()

  const getRoutes = async() => {
      const userStored = JSON.parse(localStorage.getItem('user'))
      let base = `${url}routes`
      const config = {
        headers: {
          Authrization: `Bearer ${userStored.token}`
        }
      }
      const fetchRoutes = await axios.get(base, config)
      console.log(fetchRoutes)
      fetchRoutes && setAllRoutes( fetchRoutes.data)
  }

  useEffect(()=> {
    getRoutes()
  }, [allRoutes])
  
  return (
    <Container className="routesPage" fluid>
      <h3>Routes</h3>
      <NewRoute />
    
  
    </Container>
  )
}

export default Routes