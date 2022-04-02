import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Container from 'react-bootstrap/Container'
import useAuth from '../../hooks/useAuth'
import trackPic from '../../images/olympus_track.jpeg'

const RouteCard = ({route,handleShow, handleDislike, handleLike}) => {
  const {edit,setEdit} = useAuth




    return (<>
  <Card className="bg-dark text-white recCard" style={{ width: '25rem' , borderRadius: '10px'}}>
    <Card.Img className="recCardPhoto" variant="top" src={trackPic}/>
    <Card.ImgOverlay onClick={() => handleShow('sm-down')} className='d-flex flex-column justify-content-center'>
        <Container className="imgWords">
            <Card.Title>{route.name}</Card.Title>
            <Card.Text></Card.Text>
            <Card.Text>{route.distance} {route.measurement}</Card.Text>
        </Container>
  </Card.ImgOverlay>

   
    <ListGroup className="list-group-flush">
        <ListGroupItem>{route.location} - {route.startZip}</ListGroupItem>
        <ListGroupItem>{route.tags.split(',')}</ListGroupItem>
    </ListGroup>

    <ListGroup className="list-group-flush">
        <ListGroupItem>{route.notes.length>75? route.notes.substring(0,75) + '...' : route.notes}</ListGroupItem>
        <ListGroupItem></ListGroupItem>
    </ListGroup>
 
    <Card.Body className='d-flex justify-content-between reactionBtns'>
        <Card.Link onClick={handleDislike} as={Button} variant={"outline-light"}>View</Card.Link>
        <Card.Link onClick={handleLike} as={Button} variant={"outline-info"} >Like</Card.Link>
    </Card.Body>
    </Card>
  
  </>
  )
}

export default RouteCard