import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Container from 'react-bootstrap/Container'
const UserCard = ({training, trainingPartner, runningBuddy, handleShow, handleDislike, handleLike}) => {
    const user = training ? trainingPartner : runningBuddy
  return (<>
  {/* add in image carousel */}
    <Card className="bg-dark text-white recCard" style={{ width: '25rem' , borderRadius: '10px'}}>
    <Card.Img className="recCardPhoto" variant="top" src={user.img}/>
    <Card.ImgOverlay onClick={() => handleShow('sm-down')} className='d-flex flex-column justify-content-center'>
        <Container className="imgWords">
            <Card.Title>{user.name} - AGE</Card.Title>
            <Card.Text>{user.bio.substring(0,75) + '...'}</Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Container>
  </Card.ImgOverlay>
    {training &&  
    <ListGroup className="list-group-flush">
        <ListGroupItem>Training for {user.distance} {user.measurement}</ListGroupItem>
        <ListGroupItem>{user.upcomingRace && `Upcoming Race: ${user.upcomingRace}`}</ListGroupItem>
        <ListGroupItem>Looking for a training Partner for Runs up to {user.maxRun} miles</ListGroupItem>
    </ListGroup>
    }
    {!training && 
    <ListGroup className="list-group-flush">
        <ListGroupItem>Mornings, Afternoons, weekdays, and weekends, let's Connect!</ListGroupItem>
        <ListGroupItem>Max Distance is {user.maxRun} miles</ListGroupItem>
    </ListGroup>
    }
    <Card.Body className='d-flex justify-content-between reactionBtns'>
        <Card.Link onClick={handleDislike} as={Button} variant={"outline-light"}>X</Card.Link>
        <Card.Link onClick={handleLike} as={Button} variant={"outline-danger"} >Like</Card.Link>
    </Card.Body>
    </Card>
  
  
  </>
  )
}

export default UserCard