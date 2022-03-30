import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../UserContext'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ErrorMessage from './ErrorMessage'
import axios from 'axios'
import Google from '../../images/icons/Google.svg'
import Facebook from '../../images/icons/Facebook.svg'
import Eye from '../../images/icons/Eye.svg'
import SpinnerLoad from './SpinnerLoad'

const Authenticate = () => {
  const navigate = useNavigate()
  const {user, setUser, isLoading, setIsLoading, setUserStorage, baseUrl} = useContext(UserContext)

  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const sendRequest = async() => {
    try{
      let data = {
        email: email, 
        password:password
      }
      if(register)data = {...data, verifyPassword:verifyPassword}
      let urlEndpoint = register ? 'register' : 'login'
      let registration = await axios.post(`${baseUrl}${urlEndpoint}`, data)
      registration && setUser(registration.data)
      registration &&  
      setUserStorage(registration.data)
    }catch(error){
      if(error){
        error.response.status === 400 && relayError("User Email already In Use")
        error.response.status === 404 && relayError("Invalid Username or Password")
        error.response.status === 405 && relayError("Passwords Must Match")
        error.response.status === 500 && relayError("Invalid Username or Password")
        error.response.status === 505 && relayError("Missing Fields")
      }
    }
  }

  const relayError = (message) => {  
    setErrorMessage(message)
    setShowError(true)
  }

  const handleGoogleAuth = () => {
    console.log('Auth with google')
  }

  const handleFBAuth = () => {
    console.log('Auth with FB')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPassword(false)
    setIsLoading(true)
    sendRequest()
    setEmail('')
    setPassword('')
    setVerifyPassword('')
    setIsLoading(false)
    register ?
    navigate('/profile') : 
    navigate('/dashboard')
  }

  return (<>
    {showError && 
    <ErrorMessage 
      showError={showError} 
      setShowError={setShowError}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />}
      <div className='authentication'> 
         
          <Form onSubmit={(e) => handleSubmit(e)}>
          {isLoading && <SpinnerLoad />}
          <h2>{register ? 'Register' : 'Login'}</h2>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"/>
            </Form.Group>

            <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3" id="password">
                  <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" />
                  <InputGroup.Text 
                   id="basic-addon2" 
                   onClick={()=> setShowPassword(!showPassword)}>
                     <img src={Eye} alt="eye icon"/>
                 </InputGroup.Text>
                </InputGroup>
              


            {register && <>
             <Form.Label>Verify Password</Form.Label>
             <InputGroup className="mb-3" id="verifyPassword"> 
                 <FormControl
                   placeholder="Verify Password" 
                   aria-label="Verify Password"
                   aria-describedby="basic-addon2"
                   value={verifyPassword}
                   onChange={(e) => setVerifyPassword(e.target.value)} 
                   type={showPassword ? 'text' : 'password'} 
                 />
                 <InputGroup.Text 
                   id="basic-addon2" 
                   onClick={()=> setShowPassword(!showPassword)}>
                     <img src={Eye} alt="eye icon"/>
                 </InputGroup.Text>
             </InputGroup>
             </>}
            
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
            <p onClick={()=>setRegister(!register)} className='switchToLogin'>{register ? 'Already a Member? Sign In!':'Not Yet a Member? Sign up!'}</p>

            <hr/>
            <p>{register ? 'Register' : 'Login'} with:</p>
            <Button onClick={handleGoogleAuth} variant="outline-danger" className="bg-danger m-3 rounded-3">
              <img src={Google} style={{height:'1.2rem', margin: '.25rem'}} alt="googleIcon"/>
            </Button>
            <Button onClick={handleFBAuth}  variant="outline-primary" className="bg-primary m-3 rounded-3">
              <img className="google" src={Facebook} style={{height:'1.2rem', margin: '.25rem'}} alt="facebookIcon"/>
            </Button>
        </Form>
      </div>
  </> 
  )
}

export default Authenticate