import express from 'express';
import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://harshadbankar1596:harshadbankar@cluster0.fx9sgmn.mongodb.net/travel");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

export default connectDB;