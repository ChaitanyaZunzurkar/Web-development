const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()
let PORT = process.env.PORT || 4000

const corsOptions = {
    origin: 'http://localhost:5173',  
    methods: 'GET,POST,PUT,DELETE',  
    allowedHeaders: 'Content-Type',  
};
  
app.use(cors(corsOptions)); 
app.use(express.json())

const ConnectWithDB = require('./Config/database')
ConnectWithDB()

const UserRoutes = require('./Routes/user')
const FetchingFoodDataRoutes = require('./Routes/FoodData')
app.use('/api/v1' , UserRoutes)
app.use('/api/v1' , FetchingFoodDataRoutes)

app.listen(PORT , () => {
    console.log(`Server started at port : ${PORT}`);
})