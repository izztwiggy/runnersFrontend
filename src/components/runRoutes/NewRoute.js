import {useState, useEffect } from 'react'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormText from 'react-bootstrap/FormText'
import FormCheck from 'react-bootstrap/FormCheck'
import InputGroup from 'react-bootstrap/InputGroup'
import SpinnerLoad from '../sessions/SpinnerLoad'

const NewRoute = () => {
  const {baseUrl} = useAuth
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [distance, setDistance] = useState('')
  const [measurement, setMeasurement] = useState(true)
  const [location, setLocation ] = useState('')
  const [startZip, setStartZip] = useState('')
  const [tags, setTags] = useState('')
  const [notes, setNotes] = useState('')


  const dist = measurement ? 'mi' : 'km'
  const handleTags = (e) => {
    setTags(e.target.value)
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name : name, 
      distance:distance, 
      measurement: dist, 
      location: location, 
      startZip:startZip, 
      tags:tags,
      notes: notes
    }
    console.log(data)
    createRoute(data)
  }

  const createRoute = async(data) => {
    try{
        const userStored = await JSON.parse(localStorage.getItem('user'))
        console.log(userStored.token)
        let url = `${baseUrl}/routes`
        const config = {
          headers: {
            Authrization: `Bearer ${userStored.token}`
          }
        }
        let route = await axios.post(url,data,config)
        console.log(route.data)

        
  
    }catch(err){
      console.log(err)
    }
  }

  return (<>
    <div className='inputDiv'> 
         
         <Form onSubmit={(e) => handleSubmit(e)}>
         {isLoading && <SpinnerLoad />}

         <h2>Create A New Route</h2>
           <Form.Group className="mb-3" controlId="name">
           <FloatingLabel
              controlId="name"
              label="Route Name"
              className="mb-3"
            >
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text"
            />
            </FloatingLabel>
           </Form.Group>
            
          <InputGroup className="mb-3" id="distance">
            <FloatingLabel
              controlId="distance"
              label="Distance"
              className="mb-3"
            >
                <Form.Control 
                  value={distance} 
                  onChange={(e) => setDistance(e.target.value)} 
                  type={'number'} 
                />
                <InputGroup.Text id="basic-addon2" onClick={()=> setMeasurement(!measurement)}>
                    {dist}
                </InputGroup.Text>                 
            </FloatingLabel>
          </InputGroup>
               

          <Form.Group className="mb-3" controlId="location">
           <FloatingLabel
              controlId="location"
              label="Starting Location - City"
              className="mb-3"
            >
              <Form.Control value={location} onChange={(e) => setLocation(e.target.value)} type="text"/>
            </FloatingLabel>
           </Form.Group>
           


          <Form.Group className="mb-3" controlId="startZip">
            <FloatingLabel
                controlId="startZip"
                label="Starting Location - Zipcode"
                className="mb-3"
              >
                  <Form.Control value={startZip} onChange={(e) => setStartZip(e.target.value)} type="text"/>
              </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tags">
            <FloatingLabel
                controlId="tags"
                label="Add tags #"
                className="mb-3"
              >
                  <Form.Control value={tags} onChange={(e) => handleTags(e)} type="text"/>
              </FloatingLabel>
          </Form.Group>


          <Form.Group className="mb-3" controlId="notes">
            <FloatingLabel
                controlId="notes"
                label="Enter Route Notes, Is the route hilly, paved, trails, etc."
                className="mb-3"
              >
                  <Form.Control as="textarea" value={notes} onChange={(e) => setNotes(e.target.value)}/>
              </FloatingLabel>
          </Form.Group>           


           <Button variant="outline-dark" type="submit">
             Create
           </Button>
           <hr/>
           
       </Form>
     </div>
  
  
  </>
  )
}

export default NewRoute