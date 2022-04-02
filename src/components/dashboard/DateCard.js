import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const DateCard = ({dateNum, dateName, event}) => {
  return (<>
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {dateNum} - {dateName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{event.name} with {event.match}</h4>
        <p>
          date = time = location
        </p>
        <Button>Cancel Event</Button>
        <Button>Modify Event</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
   
    </Modal>

  </>)
}

export default DateCard