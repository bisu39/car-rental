import mongoose from 'mongoose'
const bookingSchema = mongoose.Schema({
    selectCar: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Car' },
    rentalLocation: { type: String, required: true },
    returnLocation: { type: String, required: true },
    rentalDate: { type: String, required: true },
    returnDate: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const booking = mongoose.models.booking || new mongoose.model('Booking', bookingSchema)
export default booking