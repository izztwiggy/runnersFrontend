import { useState, useContext, useEffect } from 'react'
import UserContext from '../../UserContext'
import axios from 'axios'

const User = () => {
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        const getUser = async() => {
          try{
            const response = await axios.get('/users', {
              signal: controller.signal
            })
            console.log(response.data)
            isMounted && setUser(response.data)
          }catch(err){
            console.error(err)
          }
        }
        getUser()
        return() => {
          isMounted = false
          controller.abort()
        }
      }, [])

  return (<div>
  <h4>Hi {user.email}</h4>
    
  
  </div>
  )
}

export default User