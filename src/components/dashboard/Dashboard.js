import {useState, useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Calendar from './Calendar'
import UserContext from '../../UserContext'
import Messages from './Messages'

const Dashboard = () => {
  const { user, isLoading, setIsLoading, profile } = useContext(UserContext)
  
  
  return (<>
    <Container fluid>
      <Messages />
      <Calendar />
      
    </Container>
 </> 
  )
}

export default Dashboard