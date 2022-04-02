// import { GoogleLogin,GoogleLogout } from 'react-google-login';
// import { useState, useContext} from "react"
// import axios from 'axios'
// import GoogleButton from 'react-google-button'
// import UserContext from "../../UserContext"


// const GoogleLoginComponent = () => {
//     const {user, setUser, setUserStorage} = useContext(UserContext)

//     const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
//     const BACKEND_API = process.env.REACT_APP_MONGO_DB_URI
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const [userInfo, setUserInfo] = useState("")
    
//     const fetchAuthorizedUser = async() => {
//       let res = await axios.get(`${BACKEND_API}auth/user`, {withCredentials: true})
//       .catch(err => {
//         console.log('Not Able to Authenticate, please try again')
//       })
//       res && 
//       setUserStorage(res.data)
//     }
  
//     const redierctToGoogle = async () => {
//       let timer = null
//       const googleLoginURL = `${process.env.REACT_APP_backendURI}auth/google`
//       const newWindow = window.open(
//           googleLoginURL,
//           '_blank',
//           'width=500, height=600'
//       )
//       if(newWindow) {
//           timer = setInterval(() => {
//               if (newWindow.closed) {
//                   fetchAuthorizedUser()
//                   if (timer) clearInterval(timer)
//               }
//           },500)
//       }
//   }
//   return (
//     <>
//     <div className='google'>
//         <GoogleButton onClick={redierctToGoogle}/>
//     </div>
//     </>
//   )
// }

// export default GoogleLoginComponent