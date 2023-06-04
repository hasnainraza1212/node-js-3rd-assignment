const express = require('express');
const app = express();
require('dotenv').config({path:'./config.env'});
const connectDB = require('./db/db');
const routerUser = require('./route/userRoute');
const port = process.env.PORT || 5000;


// connectDB
connectDB();
// middleware
app.use(express.json());
app.use('/api',routerUser);
// routes
// connect app

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})