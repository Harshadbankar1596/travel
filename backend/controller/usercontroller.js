import Booking from "../models/usermodal.js";

// Book a ticket
export const bookTicket = async (req, res) => {
  try {
    const { user, bus, journeyDate, seats, pickupAddress, dropAddress } = req.body;

    if (!user || !bus || !journeyDate || !seats || !pickupAddress || !dropAddress) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const booking = new Booking({ user, bus, journeyDate, seats, pickupAddress, dropAddress });
    await booking.save();

    res.status(201).json({ message: "Ticket booked successfully", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
