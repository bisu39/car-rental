import car from '../models/carModel.js'
import appError from '../utils/appError.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import user from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import booking from '../models/bookingModel.js'
//@desc get all car data 
//@route GET /user/get-carsdata
//@access public
const getCarsdata = async (req, res) => {
    const carsdata = await car.find().select('brand model category pricePerDay gearType fuelType isAirConditioned outerPic')
    if (carsdata.length < 1) {
        res.status(404);
        throw new appError("Car data not found", 404);
    } else {
        return res.json({ success: true, carsdata })
    }
}
//@desc get the  car data 
//@route GET /user/get-cardetils
//@access public
const getCardetails = async (req, res) => {
    const { id } = req.query
    const carDetails = await car.find({ _id: id }).select('-isAvailable')
    if (carDetails.length < 1) {
        res.status(404);
        throw new appError("Car details not found", 404);
    } else {
        return res.json({ success: true, carDetails })
    }
}

//@desc register the user
//@route post /user/register
//@access public
const registerUser = async (req, res) => {
    const { name, phone, email, password } = req.body

    if (!name || !phone || !email || !password) {
        throw new appError('Details are missing', 400)
    }
    if (!validator.isEmail(email)) {
        throw new appError('Email format is not valid', 400)
    }
    if (password.length < 8) {
        throw new appError('Password should contain at least 7 characters', 400)
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const userData = await user.create({
            name,
            phone,
            email,
            password: hashedPassword
        })
        const token = jwt.sign({ id: userData._id }, process.env.JWT_USER_SECRET)
        res.json({ success: true, message: 'register request recieved', token })
    } catch (error) {
        if (error.code === 11000) {
            throw new appError('Email already exists', 400)
        }
        throw new appError('An error occurred while registering the user', 500)
    }

}
//@desc login the user
//@route post /user/login
//@access public
const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new appError("Details missing", 400)
    }
    const userData = await user.findOne({ email })
    if (!userData) {
        throw new appError("Email not register yet", 400)
    }
    const isMatch = await bcrypt.compare(password, userData.password)
    if (!isMatch) {
        throw new appError("Wrong credential", 400)
    } else {
        const token = jwt.sign({ id: userData._id }, process.env.JWT_USER_SECRET)
        res.json({ success: true, message: "Logged in successfully!", token })
    }
}
//@desc booking car
//@route post /user/booking
//@access private
const carBooking = async (req, res) => {
    const { selectCar, rentalLocation, returnLocation, rentalDate, returnDate } = req.body
    const userId = req.userId
    if (!userId) {
        throw new appError('Not logged in', 400)
    }
    try {
        const bookingData = await booking.create({ selectCar, rentalLocation, returnLocation, rentalDate, returnDate, userId })
        const updatedCarData = await car.findByIdAndUpdate(selectCar, { $push: { bookings: bookingData._id } })
        res.json({ success: true, message: "Booking is done!" })
    } catch (error) {
        throw new appError(error.message, 500)
    }

}
export { getCarsdata, getCardetails, registerUser, loginUser, carBooking }