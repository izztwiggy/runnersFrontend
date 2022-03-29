import { createContext, useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [user, setUser] = useState('')
    const [profile, setProfile] = useState('')
    const [recs, setRecs] = useState([])
    const [likes, setLikes] = useState([])
    const [dislikes, setDislikes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

  return (
  <UserContext.Provider value={{
      user, setUser, 
      profile, setProfile, 
      recs, setRecs, 
      likes, setLikes, 
      dislikes, setDislikes, 
      isLoading, setIsLoading
  }}>
      {children}
  </UserContext.Provider>
  )
}


export default UserContext;