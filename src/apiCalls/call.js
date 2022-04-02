import axios from "axios";
import useAuth from "../hooks/useAuth";

const {baseURL} = useAuth

const API = axios.create({baseURL: baseURL})

export const fetchRoutes = () => API.get('/routes')
export const createRoute = (data) => API.post('/routes', data)
export const editRoute = (routeId, data) => API.put(`/routes/${routeId}`, data)
export const likeRoute = (routeId) => API.put(`/routes/${routeId}/likes`)

export const fetchUser = () => API.get('/user')
export const editUserInfo = (data) => API.put('/user', data)
export const editUserPrefrences = (data) => API.put('/user/prefrences',data)
export const fetchAllUserRoutes = () => API.get('/user/routes')
export const deleteUser = () => API.delete('/user')

export const fetchAllMatches = () => API.get('/matches')
export const scheduleMatchEvent = (userB,data) => API.post(`/matches/${userB}/schedule`,data)
export const deleteMatch = (id) => API.delete(`/matches/${id}`)

export const fetchUserDash = () => API.get('/dashboard')
export const postUserDash = (data) => API.post('/dashboard',data)
export const deleteEventDash = (eventId) => API.delete(`/dashboard/${eventId}`)
export const editEventDash = (eventId,data) => API.put(`/dashboard/${eventId}`,data)

export const loginUser = (data) => API.post('/sessions/login', data)
export const registerUser = (data) => API.post('/sessions/register', data)
export const logoutUser = () => API.get('/sessions/logout')