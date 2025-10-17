import express from "express";

import { bookTicket, getBookings } from "../controller/usercontroller.js";

const router = express.Router();

// POST /api/bookings -> Book ticket
router.post("/", bookTicket);

// GET /api/bookings -> Get all bookings
router.get("/", getBookings);

export default router;
