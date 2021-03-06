import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth'

import User from './User'
import SpinnerLoad from "../sessions/SpinnerLoad"
import Prefrences from "./Prefrences"
import Settings from "./Settings"
import EditSettings from "./EditSettings"
import EditPrefrences from "./EditPrefrences"
import DisplayUserProfile from "./DisplayUserProfile"
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import axios from "axios"



const Profile = () => {
  const {user, profile, setProfile, prefrences, setPrefrences, edit, setEdit, baseUrl} = useAuth
  const navigate = useNavigate()
  const [settingsEdit, setSettingsEdit] = useState(false)
  const [prefrencesEdit, setPrefrencesEdit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // const refresh = useRefreshToken()


  useEffect(() => {
    if(edit){
      setSettingsEdit(true)
      setPrefrencesEdit(true)
    }
    getProfile()
  }, [])


  const getProfile = async() => {
    try{  
      const userStored = JSON.parse(localStorage.getItem('user'))
      const config = {
        headers: { Authorization: `Bearer ${userStored.token}` }
      }
      let base = `${baseUrl}/user`
      const fetchUserData = await axios.get(base, config)
      console.log('user ', fetchUserData.data)
      fetchUserData && setProfile( fetchUserData.data)
    }catch(err){
      console.log(err)
    }
  }

  return (<>
  <Container className="profilePage" fluid>
    <Row>
      <Col xs={12} md={6} xl={6}>
        <DisplayUserProfile />
      </Col>
      <Col xs={12} md={6} xl={6}></Col>
      <Col xs={12} md={6} xl={6}></Col>
    </Row>
    <Row>

    </Row>
    <Row>

    </Row>
    <Row>

</Row>

{/* <User /> */}
<div className="userInfo">
<Button onClick={() => setSettingsEdit(!settingsEdit)} className="me-2" variant="outline-dark">Edit Prefrences</Button>
<Button onClick={() => setPrefrencesEdit(!prefrencesEdit)} className="me-2" variant="outline-dark">Edit Settings</Button>    
{user && 
<>
<h3>Welcome {user.email}</h3>
</>}
{isLoading && <SpinnerLoad />}
{settingsEdit ? 
<EditSettings /> :
<Settings /> 
}
{prefrencesEdit ?
<EditPrefrences /> :
<Prefrences />  
}
</div> 
  </Container>
  </>
  )
}

export default Profile