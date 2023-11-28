// importing
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const cors = require('cors');

// Making express app
const app = express();

// dotenv config
dotenv.config();

// cors policy
const corsPolicy = {
    origin : true,
    credentials : true,
    optionSuccessStatus : 200,   
}
app.use(cors(corsPolicy))

// mongodb connection
connectDB();

// Accepting json data
app.use(express.json());

// test route
app.get('/test',(req,res)=>{
    res.send('Hello from express server')
})
// http://localhost:5000/test

// user routes
app.use('/api/user', require('./routes/userRoutes'))
// our actual routes
// http://localhost:5000/api/user/create
// http://localhost:5000/api/user/login

// CREATE A ROUTE FOR PRODUCTS


// defining port
const PORT = process.env.PORT;
// run the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})