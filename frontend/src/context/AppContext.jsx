import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()
const AppContextProvider = ({ children }) => {
    const [carsdata, setCarsData] = useState([])
    const [carDetails, setCarsDetails] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const getCarsdata = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/user/get-carsdata`)
            if (data.success) {
                setCarsData(data.carsdata)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
    const getCarDetails = async (id) => {
        try {
            const { data } = await axios.get(`${backendUrl}/user/get-cardetils`, {
                params: { id }
            })
            if (data.success) {
                setCarsDetails(data.carDetails)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
     const locationList = [
            "Kolkata Airport (CCU)",
            "Howrah Railway Station",
            "Sealdah Railway Station",
            "Kolkata Railway Station",
            "Salt Lake - Sector V",
            "New Town - Action Area 1",
            "Park Street",
            "Esplanade",
            "Ballygunge",
            "Garia",
            "Dum Dum",
            "Park Circus"
        ];
    useEffect(() => { getCarsdata() })
    const value = {
        backendUrl,
        carsdata,
        carDetails,
        getCarDetails,
        token,
        setToken,
        locationList
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
