import {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Calendar from './Calendar'
import UserContext from '../../UserContext'
import Messages from './Messages'

const Dashboard = () => {
  const { user, isLoading, setIsLoading, profile } = useContext(UserContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!user) navigate('/auth')
  }, [user])
  
  return (<>
    <Container fluid>
      <Messages />
      <Calendar />
      
    </Container>
 </> 
  )
}

export default Dashboard