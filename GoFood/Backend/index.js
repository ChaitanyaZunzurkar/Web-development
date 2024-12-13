const express = require('express')
const app = express()

require('dotenv').config()
let PORT = process.env.PORT || 4000

app.use(express.json())

const ConnectWithDB = require('./Config/database')
ConnectWithDB()

const UserRoutes = require('./Routes/user')
app.use('/user' , UserRoutes)

app.listen(PORT , () => {
    console.log(`Server started at port : ${PORT}`);
})