import { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'

const User = () => {
    const {user, setUser, profile, prefrences} = useAuth

    // useEffect(() => {
    //     let isMounted = true
    //     const controller = new AbortController()
    //     const getUser = async() => {
    //       try{
    //         const response = await axios.get('http://localhost:4600/user', {
    //           signal: controller.signal
    //         })
    //         console.log(response.data)
    //         isMounted && setUser(response.data)
    //       }catch(err){
    //         console.error(err)
    //       }
    //     }
    //     getUser()
    //     return() => {
    //       isMounted = false
    //       controller.abort()
    //     }
    //   }, [])

  return (<div>
  <h4>Hi {user.email}</h4>
    
  
  </div>
  )
}

export default User