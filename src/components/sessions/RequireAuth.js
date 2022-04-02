import {useState, useEffect} from 'react'
import useAuth from '../../hooks/useAuth'
import useRefreshToken from '../../hooks/useRefreshToken'
import SpinnerLoad from './SpinnerLoad'


const RequireAuth = () => {
    const {user} = useAuth()
    const refresh = useRefreshToken()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const verifyRefreshToken = async() => {
            try{
                await refresh()
            }catch(err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }
        // only run when we dont have an access token
        !user?.token ? verifyRefreshToken() : setIsLoading(false)
    }, [])

    useEffect(() => {
        console.log(`Is loading: ${isLoading}, at: ${JSON.stringify(user?.token)}`)
    }, [isLoading])

    return(<>
        {isLoading &&
        <SpinnerLoad /> 
        }
    
    </>)

}

export default RequireAuth