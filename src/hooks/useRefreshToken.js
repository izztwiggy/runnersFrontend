import axios from "axios";
import { useContext } from "react";
import UserContext from "../UserContext";


const useRefreshToken = () => {
    const {user, setUser} = useContext(UserContext)
    const baseUrl = 'http://localhost:4600/sessions'
    const refresh = async() => {
        const response = await axios.get(`${baseUrl}/refresh`, {
            withCredentials: true
        })
        response &&
        setUser((prev) => {
            console.log(JSON.stringify(prev))
            console.log(response.data.accessToken)
            return {...prev, token: response.data.token}
        })
        return response.data.accessToken
    }
    return refresh
}

export default useRefreshToken