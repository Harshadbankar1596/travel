import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  bus: {
    busNumber: { type: String, required: true },
    busName: { type: String, required: true },
  },
  journeyDate: { type: Date, required: true },
  seats: { type: Number, required: true, min: 1 },
  pickupAddress: { type: String, required: true },
  dropAddress: { type: String, required: true },
  bookedAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
