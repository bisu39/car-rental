import express from 'express'
import { getCarsdata, getCardetails, registerUser, loginUser, carBooking } from '../controller/userController.js'
import isLoggedin from '../middleWares/isLoggedIn.js'
const userRoute = express.Router()

userRoute.get('/get-carsdata', getCarsdata)
userRoute.get('/get-cardetils', getCardetails)
userRoute.post('/register', registerUser)
userRoute.post('/login', loginUser)
userRoute.post('/booking', isLoggedin, carBooking)
export default userRoute