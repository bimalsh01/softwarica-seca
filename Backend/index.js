// importing
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db');
const cors = require('cors');
const multiparty = require('connect-multiparty')
const cloudinary = require('cloudinary');

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

// multiparty middleware
app.use(multiparty())

// cloudinary config
          
cloudinary.config({ 
  cloud_name: 'dvjjbmlsg', 
  api_key: '228794781863152', 
  api_secret: '6Wbr7jzMDkr7e44xue_nXfXQ42k' 
});

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
app.use('/api/product', require('./routes/productRoutes'))


// defining port
const PORT = process.env.PORT;
// run the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})