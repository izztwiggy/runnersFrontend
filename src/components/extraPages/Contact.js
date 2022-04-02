import track from '../../images/two_men_stairs.jpeg'
import logo from '../../images/olympus_track.jpeg'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import FormText from 'react-bootstrap/FormText'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const {setContactUs} = useAuth
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    setContactUs({
      email:email,
      note:note
    })
    setEmail('')
    setNote('')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(!submitted)
    }, 3000)
  }

  return (<>
    <div className="contactUs"  style={{ marginBottom: 0, height: '100vh'}} >
      <Form onSubmit={(e) => handleSubmit(e)}>
          <h2>Contact Us!</h2>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Enter an Email address for us to reply to:</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Leave Your Note Here</Form.Label>
                <Form.Control as={"textarea"} value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="Thoughts?"/>
            </Form.Group>

            <Button variant="outline-light" type="submit">
              Send!
            </Button>
            {submitted && <h3>Submitted!</h3>}
    </Form>
   </div>
</>
)
}

export default Contact