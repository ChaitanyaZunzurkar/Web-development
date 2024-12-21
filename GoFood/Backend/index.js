const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')


require('dotenv').config()
let PORT = process.env.PORT || 4000

const corsOptions = {
    origin: 'http://localhost:5173',  
    methods: 'GET,POST,PUT,DELETE',  
    allowedHeaders: ['Content-Type', 'Authorization'], 
};
  
app.use(cors(corsOptions)); 
app.use(express.json())
app.use(cookieParser())

const ConnectWithDB = require('./Config/database')
ConnectWithDB()

const UserRoutes = require('./Routes/user')
const FetchingFoodDataRoutes = require('./Routes/FoodData')
const BuyAndCartRoutes = require('./Routes/BuyAndCart')

app.use('/api/v1' , UserRoutes)
app.use('/api/v1' , FetchingFoodDataRoutes)
app.use('/api/v1' , BuyAndCartRoutes)

app.listen(PORT , () => {
    console.log(`Server started at port : ${PORT}`);
})