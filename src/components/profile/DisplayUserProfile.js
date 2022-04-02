import {useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Tooltip from 'react-bootstrap/Tooltip'
import userProfPic from '../../images/runStairs.jpeg'
import SpinnerLoad from '../sessions/SpinnerLoad'
import { birthday,calculateAge, relativeTime} from '../../utils/relativeTime'
import tempPic from '../../images/RUNCO_lightningChaos.png'


const DisplayUserProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {user, profile, prefrences} = useAuth()
  
    const [showModal, setShowModal] = useState(false);
    const [fullscreen, setFullscreen] = useState(true)
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShowModal(true);
    }

  // firstName: String,
    // lastName: String,
    // birthDate: {
    //     month: {type: Number, min: 1, max: 12},
    //     day: {type: Number, min: 1, max: 31},
    //     year: {type: Number, max: year - 18}
    // },
    // genderIdentity: String, 
    // location: {type: String, lowercase: true},
    // zipCode: String,
    // matchMe: {type: Boolean, default: true},
    // training: {
    //     distanceMax: Number,
    //     raceDistance : Number, 
    //     raceMeasurement : String
    // },
    // routes: [
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Route'
    //     }
    // ],
    // profilePicture:{
    //     url: String, 
    //     filename: String
    // },

    let userBirthday = profile.birthDate ? birthday(profile.birthDate.year, profile.birthDate.month, profile.birthDate.day) : null
    let age = profile.birthDate ? calculateAge(profile.birthDate.year, profile.birthDate.month, profile.birthDate.day) : null

    console.log(profile)
    console.log(prefrences)    
  return (<>
    {/* <Container className="userProfCard" style={{borderRadius: '10px'}} fluid>
        <Row className='showHeader'>
            <Col xs={4}> <h2>{profile.firstName && profile.firstName}</h2></Col>
            <Col xs={4}>{userBirthday}</Col>
            <Col xs={4}><h2>{age}</h2></Col>
        </Row>
        <Row >
          <Image src={profile.profilePicture || tempPic} alt="user profile pic" className='profPicProfile'/>
        </Row>
        <Row>
            <Col xs={4}>{profile.location?.profile.location}</Col>
            <Col xs={4}>{profile.training?.profile.training.raceDistance} {profile.training?.profile.training.measurement}</Col>
            <Col xs={4}><h2>Matches Discovery <span style={{fontWeight:'bold'}}>{profile.matchMe ? 'on' : 'off'}</span></h2></Col>
        </Row>
    </Container> */}
    <Card className="bg-dark text-white recCard" style={{height:'80vh', width: '40vw' , borderRadius: '10px', margin: '2rem', display:'flex', flexDirection: 'column'}}>
    <Card.Img className="recCardPhoto" variant="top" style={{ width: '80%' , borderRadius: '10px', margin: '2rem'}} src={profile.profilePicture || tempPic}/>
    <Card.ImgOverlay onClick={() => handleShow('sm-down')} >
        <Container className="imgWords">
            {profile.firstName ? <><Card.Title>{profile.firstName && profile.firstName} - {age && age}</Card.Title></> : 
            <><Card.Title>{user.username}</Card.Title></>
            }
            <Card.Text>{profile.location?.profile.location}</Card.Text>
            {profile.createdAt && <><Card.Text>member since {relativeTime(profile.createdAt)}</Card.Text></>}
        </Container>
  </Card.ImgOverlay>

    {profile.training &&  
    <ListGroup className="list-group-flush">
        <ListGroupItem>Training for {profile.training.raceDistance} {profile.training.measurement}</ListGroupItem>
        <ListGroupItem>{user.upcomingRace && `Upcoming Race: ${profile.training.upcomingRace}`}</ListGroupItem>
        <ListGroupItem>Looking for a training Partner for Runs up to {profile.training.distanceMax} miles</ListGroupItem>
    </ListGroup>
    }
    </Card>
  </>
  )
}

export default DisplayUserProfile