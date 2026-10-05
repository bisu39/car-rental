import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    gearType: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    doorNumber: {
        type: Number,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    seatingCapacity: {
        type: Number,
        required: true
    },
    outerPic: {
        type: String,
        required: true
    },
   interiorPic: {
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true }
},
    totalKM: {
        type: Number,
        required: true
    },
    equipments: [{
        type: String,
        required: true
    }],
    isAirConditioned: {
        type: Boolean,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    bookings:{
      type:[mongoose.Schema.Types.ObjectId],
      ref: 'Booking'
    }
});

  const car = mongoose.models.Car || mongoose.model('Car',carSchema)
  export default car