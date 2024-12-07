const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
let PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cors())

const DBConnection = require('./Config/database')
DBConnection();

const userRoutes = require('./Routes/user')
app.use('/user' , userRoutes);

app.listen(PORT , () => {
    console.log(`Server started at ${PORT}`);
})