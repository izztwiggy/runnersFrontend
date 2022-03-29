import {Link, useLocation} from 'react-router-dom'
import { useContext } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import UserContext from '../UserContext'

const Layout = ({children}) => {
    const location = useLocation()
    const { user } = useContext(UserContext)
  return (<>
  <Navigation />
    {children}
  <Footer />
  </>
)
}

export default Layout