import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from "react-bootstrap/ListGroupItem"

const UserCard = ({training, trainingPartner, runningBuddy, handleShow, handleDislike, handleLike}) => {
    const user = training ? trainingPartner : runningBuddy
  return (<>
    <Card className="p-5" style={{ width: '30rem' , borderRadius: '10px'}}>
    <Card.Img variant="top" src={user.img} onClick={() => handleShow('sm-down')}/>
    <Card.Body onClick={() => handleShow('sm-down')}>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.bio.substring(0,75) + '...'}</Card.Text>
    </Card.Body>
   {training &&  
    <ListGroup className="list-group-flush">
        <ListGroupItem>Training for {user.distance} {user.measurement}</ListGroupItem>
        <ListGroupItem>{user.upcomingRace && `Upcoming Race: ${user.upcomingRace}`}</ListGroupItem>
        <ListGroupItem>Looking for a training Partner for Runs up to {user.maxRun} miles</ListGroupItem>
    </ListGroup>
    }
    {!training && 
    <ListGroup className="list-group-flush">
        <ListGroupItem>Running Buddy!</ListGroupItem>
        <ListGroupItem>Mornings, Afternoons, weekdays, and weekends, let's Connect!</ListGroupItem>
        <ListGroupItem>Max Distance is {user.maxRun} miles</ListGroupItem>
    </ListGroup>
    }
    <Card.Body className='d-flex justify-content-between'>
        <Card.Link onClick={handleDislike} as={Button} variant={"outline-dark"}>X</Card.Link>
        <Card.Link onClick={handleLike} as={Button} variant={"outline-danger"} >Like</Card.Link>
    </Card.Body>
    </Card>
  
  
  </>
  )
}

export default UserCard