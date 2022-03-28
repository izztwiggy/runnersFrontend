import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'


const UserCardLoading = () => {
  return (<>
    <Card className="p-5" style={{ width: '30rem' , borderRadius: '10px'}}>
        <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} bg="success"/> <Placeholder xs={4} bg="success"/> <Placeholder xs={4} bg="success"/>{' '}
            <Placeholder xs={6} bg="success"/> <Placeholder xs={8} bg="secondary"/>
        </Placeholder>
        <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} bg="danger"/>
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} bg="warning" /> <Placeholder xs={4} bg="warning"/> <Placeholder xs={4} bg="info"/>{' '}
            <Placeholder xs={6} bg="info"/> <Placeholder xs={8} bg="info"/>
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
    </Card>
    
  
  </>
  )
}

export default UserCardLoading