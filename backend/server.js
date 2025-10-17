import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
// DB
import connectDB from './DB/db.js';

// routs
import userrouts from "./routes/userrouts.js"

// 
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/user", userrouts)



connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})