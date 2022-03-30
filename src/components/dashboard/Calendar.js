import {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DateCard from './DateCard'

const Calendar = () => {
  const today = new Date()
  const month = today.toLocaleString('default', {month: 'long'})
  const year = today.getFullYear()
  
  return (<>
  <p>Today is {today.toDateString()}</p>
  <h2>{month} - {year}</h2>
  <Container style={{border: '1px solid black', maxHeight: '30rem', maxWidth: '40rem'}} fluid>
    <Row>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
    </Row>
    
    <Row>
    <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
    </Row>
    <Row>
    <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
    </Row>
    <Row>
    <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
    </Row>
    <Row>
    <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
    </Row>
    <Row>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      <Col>5</Col>
      <Col>6</Col>
      <Col>7</Col>
    </Row>
  </Container>
  </>  
  )
}

export default Calendar