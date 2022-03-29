import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios'
import Eye from '../../images/icons/Eye.svg'
import Google from '../../images/icons/Google.svg'
import Facebook from '../../images/icons/Facebook.svg'

const Authenticate = () => {
  const {user, setUser} = useContext(UserContext)

  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')

  const baseUrl = 'http://localhost:4600/sessions/'

  const sendRequest = async() => {
    try{
      let data = {
        email: email, 
        password:password
      }
      if(register)data = {...data, verifyPassword:verifyPassword}
      console.log(data)
      let urlEndpoint = register ? 'register' : 'login'
      console.log(`${baseUrl}${urlEndpoint}`)
      let registration = await axios.post(`${baseUrl}${urlEndpoint}`, data)
      console.log(registration)
    }catch(err){
      console.error(err)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    verifyPassword && console.log(verifyPassword)
    sendRequest()
    setEmail('')
    setPassword('')
    setVerifyPassword('')
  }

  return (<>
      <div className='authentication'>      
          <Form onSubmit={(e) => handleSubmit(e)} >
            <h2>{register ? 'Register' : 'Login'}</h2>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            {register && 
            <Form.Group className="mb-3" controlId="verifyPassword">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} type="password" placeholder="Verify Password" />
            </Form.Group>
            }
            
            <Button variant="warning" type="submit">
              Submit
            </Button>
            <p onClick={()=>setRegister(!register)} className='switchToLogin'>{register ? 'Already a Member? Sign In!':'Not Yet a Member? Sign up!'}</p>

            <hr/>
            <p>{register ? 'Register' : 'Login'} with:</p>
            <Button className="m-3">
              <img src={Google} alt="googleIcon" variant="warning"/>
            </Button>
            <Button className="m-3">
              <img className="google" src={Facebook} alt="facebookIcon" variant="warning"/>
            </Button>
        </Form>
        
      </div>
  
  
  </> 
  )
}

export default Authenticate