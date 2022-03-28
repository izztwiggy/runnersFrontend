import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ShowFullUser = ({training, trainingPartner, runningBuddy, setShowModal, showModal, fullscreen, handleLike, handleDislike}) => {
    // training will be bool of user prefrence, trainingPartner and runningBuddy wont exist they will be the actual users being shown
    const user = training ? trainingPartner : runningBuddy

  return (<>
   
    {/* large modal - fullscreen on small devices, close if click /focus outside */}
    <Modal
        size="xl"
        show={showModal}
        fullscreen={fullscreen}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" >
            {training ? trainingPartner.name : runningBuddy.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <Col xs={12} lg={10}>
                        <img style={{ width: '100%' , borderRadius: '10px'}} src={user.img} alt="User Profile Pic"/>
                    </Col>
                    <Col xs={6} lg={6}>
                    <h4>Age {user.age} - {user.location}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>{user.bio}</p>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between' >
            <Button onClick={handleDislike}>X</Button>
            <Button onClick={handleLike}>Like</Button>
      </Modal.Footer>
      </Modal>
  
  </>
  )
}

export default ShowFullUser