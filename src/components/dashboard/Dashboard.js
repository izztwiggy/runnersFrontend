import React from 'react'
import { Container } from 'react-bootstrap'
import Calendar from './Calendar'

const Dashboard = () => {
  const today = new Date()
  
  return (<>
  <Container>
    <h2>Welcome to Your Dashboard User</h2>
    <Calendar />



  <p>Today is {today.toDateString()}</p>
  </Container>
 </> 
  )
}

export default Dashboard