import { useState, useContext } from "react"
import UserContext from "../../UserContext"
import User from '../sessions/User'
import SpinnerLoad from "../sessions/SpinnerLoad"
import Prefrences from "./Prefrences"
import Settings from "./Settings"
import EditSettings from "./EditSettings"
import EditPrefrences from "./EditPrefrences"
import DisplayUserProfile from "./DisplayUserProfile"

import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'


const Profile = () => {
  const {user, profile, isLoading, setIsLoading} = useContext(UserContext)
  const [settingsEdit, setSettingsEdit] = useState(false)
  const [prefrencesEdit, setPrefrencesEdit] = useState(false)

  return (<>
  <Container className="profilePage">
    <DisplayUserProfile />
    <User />
    <div className="userInfo">
    <Button className="me-2" variant="outline-dark">Edit Prefrences</Button>
    <Button className="me-2" variant="outline-dark">Edit Settings</Button>    
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