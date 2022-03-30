import {useState, useEffect} from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import userProfPic from '../../images/runStairs.jpeg'
import SpinnerLoad from '../sessions/SpinnerLoad'

const DisplayUserProfile = () => {
    const [isLoading, setIsLoading] = useState(false)

    let name = "leelee"
    let city = 'seattle'
  return (<>
    <Container className="userProfCard" fluid>
        <Row>
            <Col xs={6}> <h2>{name}</h2></Col>
            <Col xs={6}> <h2>{city}</h2></Col>
        </Row>
        <Row>
            <Col>{isLoading ? <SpinnerLoad /> : <Image src={userProfPic} alt="user profile pic" className='profPicProfile'/>}</Col>
        </Row>
    </Container>
  
  </>
  )
}

export default DisplayUserProfile