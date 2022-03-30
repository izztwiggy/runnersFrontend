import { createContext, useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()

      // get user from local storage
    // const userCheck = JSON.parse(localStorage.getItem('user'))

    const [user, setUser] = useState('')
    const [profile, setProfile] = useState('')
    const [recs, setRecs] = useState('')
    const [likes, setLikes] = useState('')
    const [dislikes, setDislikes] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const baseUrl = 'http://localhost:4600/sessions/'
    // set User to Local Storage

    const setUserStorage = (data) => {
      return localStorage.setItem('user', JSON.stringify(data))
    } 

    const logout = () => {
        localStorage.removeItem('user')
        setUser('')
    }

  return (
  <UserContext.Provider value={{
      user, setUser, 
      profile, setProfile, 
      recs, setRecs, 
      likes, setLikes, 
      dislikes, setDislikes, 
      isLoading, setIsLoading,
      setUserStorage, logout,
      baseUrl
  }}>
      {children}
  </UserContext.Provider>
  )
}


export default UserContext;