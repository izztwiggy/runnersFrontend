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
// import GoogleLoginComponent from './GoogleLoginComponent'
import { GoogleLogin } from 'react-google-login'

const Authenticate = () => {
  const navigate = useNavigate()
  const {user, setUser, profile, setProfile, prefrences, setPrefrences, setUserStorage, baseUrl, setEdit} = useContext(UserContext)

  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // const passwordVal = new RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/})
  const sendRequest = async() => {
    try{
      let data = {
        email: email, 
        password:password
      }
      if(register)data = {...data,username: username, verifyPassword:verifyPassword}
      let urlEndpoint = register ? 'register' : 'login'
      let registration = await axios.post(`${baseUrl}/sessions/${urlEndpoint}`,data)
      console.log(registration.data)
      registration && setUser({id: registration.data._id, email: registration.data.email, token: registration.data.token})
      registration && setProfile(registration.data.profile)
      registration && setPrefrences(registration.data.prefrences)
      registration && setUserStorage({email: registration.data.email, id: registration.data._id, token: registration.data.token})   
      // console.log(accessToken)

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
  
  const handleFBAuth = () => {
    console.log('Auth with FB')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPassword(false)
   
    sendRequest()
    setEmail('')
    setPassword('')
    setUsername('')
    setVerifyPassword('')
 
  }

  const direct = () => {
    if(user && register){
      setEdit(true)
      navigate('/profile')
    }
    if(user && !register) navigate('/dashboard')
  }

  useEffect(() => {
    direct()
  }, [user, register])

  
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

  // const googleSuccess = async(res) => {   
  //   const result = res?.profileObj
  //   const token = res?.tokenId
  //   try{
  //       console.log(res)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // const googleFailure = async(err) => {
  //   console.log(err)
  //   console.log('Google Sign in was unsucsessful')
  // }

  return (<>
    {showError && 
    <ErrorMessage 
      showError={showError} 
      setShowError={setShowError}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />}
      <div className='inputDiv'> 
         
          <Form onSubmit={(e) => handleSubmit(e)}>
          <h2>{register ? 'Register' : 'Login'}</h2>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"/>
            </Form.Group>

          {register && <>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Choose a Username"/>
            </Form.Group>
          </>}

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
             <Form.Label>Verify Password </Form.Label>
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
            {/* <GoogleLogin 
              clientId={CLIENT_ID}
              buttonText="Google Sign In"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
            /> */}
            <Button onClick={handleFBAuth}  variant="outline-primary" className="bg-primary m-3 rounded-3">
              <img className="google" src={Facebook} style={{height:'1.2rem', margin: '.25rem'}} alt="facebookIcon"/>
            </Button>
        </Form>
      </div>
  </> 
  )
}

export default Authenticate





//   const googleSuccess = async(res) => {   
//     try{  
//       console.log('Auth with google')
//       console.log(res)
//       let data = await fetch("http://localhost:4600/auth/google", {
//           method: "POST",
//           body: JSON.stringify({
//           token: res.tokenId
//         }),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       })
//       let json = await data.json()
//       if(json) console.log(json.data)

      
//     // store returned user somehow
//   }catch(err){
//       console.log(err)
//   }                        
// }   
    
        

    //   data: {
    //     token: token,
    //     email:result.email,
    //     googleId:result.googleId,
    //   },
    //   withCredentials: true,
    //   url: 'http://localhost:4600/google',
    // }).then((res) => {
    //   console.log(res)
    //   console.log(res.data)
    //   // localStorage.setItem("user", res.data)
      
    // });
    
      // console.log(google)
      // google && setUser(google.data)
      // google && setUserStorage(google.data)   
      // if(!google) relayError('Not Able to Authenitcate with google, please try again')
      // google && setUser(google.data)
      // google && setUserStorage(google.data)   
      // if(!google) relayError('Not Able to Authenitcate with google, please try again')    


    /* <Button onClick={handleGoogleAuth} variant="outline-danger" className="bg-danger m-3 rounded-3">
              <img src={Google} style={{height:'1.2rem', margin: '.25rem'}} alt="googleIcon"/>
            </Button> */

              // const handleGoogleAuth = async() => {
  //   try{  
  //     console.log('Auth with google')
  //     let google = await axios.get('http://localhost:4600/auth/google/callback')
  //     console.log(google)
  //     google && setUser(google.data)
  //     google && setUserStorage(google.data)   
  //     if(!google) relayError('Not Able to Authenitcate with google, please try again')

  //   }catch(err){
  //     console.log(err)
  //   }
    
  // }