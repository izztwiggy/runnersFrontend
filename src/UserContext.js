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
    const [auth, setAuth] = useState({})
    const [edit, setEdit] = useState(false)
    const [profile, setProfile] = useState('')
    const [prefrences, setPrefrences] = useState('')
    const [recs, setRecs] = useState('')
    const [likes, setLikes] = useState('')
    const [dislikes, setDislikes] = useState('')
    const baseUrl = process.env.REACT_NODE_ENV === 'production' ? process.env.REACT_APP_MONGO_URI : process.env.REACT_APP_MONGO_DB_URI
    
    // set User to Local Storage

    const setUserStorage = (data) => {
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      // getProfile()
    } 

    const getProfile = async() => {
      try{
        let prof = await axios.get(`${baseUrl}/user`, 
        {
          withCredentials: true
        })
        let userProf = prof?.data
        userProf && setProfile(userProf)
      }catch(err){
          console.log(err)
      }
    }


    const logout = () => {
        localStorage.removeItem('user')
        setUser('')
    }

    // useEffect(() => { 
    //   getProfile()

    // }, [user])

  return (
  <UserContext.Provider value={{
      user, setUser, 
      auth, setAuth,
      profile, setProfile, 
      recs, setRecs, 
      likes, setLikes, 
      dislikes, setDislikes, 
      prefrences, setPrefrences,
      setUserStorage, logout,
      edit,setEdit,
      baseUrl
  }}>
      {children}
  </UserContext.Provider>
  )
}


export default UserContext;