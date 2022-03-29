import { useState, useContext } from "react"
import UserContext from "../../UserContext"
import User from '../sessions/User'

const Profile = () => {
  const {user} = useContext(UserContext)
  return (<>
    <User />
    <div className="userInfo">
    <button>Edit Prefrences</button>
    <button>Edit Profile Data</button>
    {user && <>
      <h3>Welcome {user.email}</h3>
    </>}
    {user ? 'Hi User!' : 'Login To View!'}
      <h1>TRAINING Partnership</h1>
      <h3>Profile</h3>
      <h6>Name:</h6>
      <h6>Age</h6>
    </div> 
  </>
  )
}

export default Profile