import {useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import userProfPic from '../../images/runStairs.jpeg'
import SpinnerLoad from '../sessions/SpinnerLoad'

const DisplayUserProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {user, profile, prefrences} = useAuth()

    let name = "leelee"
    let city = 'seattle'
  return (<>
    <Container className="userProfCard" style={{borderRadius: '10px'}} fluid>
        <Row className='showHeader'>
            <Col xs={4}> <h2>{name}</h2></Col>
            <Col xs={4}></Col>
            <Col xs={4}> <h2>{city}</h2></Col>
        </Row>
        <Row >
          <Image src={userProfPic} alt="user profile pic" className='profPicProfile'/>
        </Row>
        <Row>
          <Col>
            Bio
          </Col>
        </Row>
    </Container>
     {/* <Card className='userProfCard'>
        <Card.Header>{name} - {city}</Card.Header>
          <Card.Body>
            <Card.Text>
              Bio
            </Card.Text>
          </Card.Body>
        <Card.Img variant="bottom" src={userProfPic} alt="user profile pic" className='profPicProfile'/>
      </Card> */}
  
  </>
  )
}

export default DisplayUserProfile