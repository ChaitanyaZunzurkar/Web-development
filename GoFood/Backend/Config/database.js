const mongoose = require('mongoose');
require('dotenv').config()

const DATABASE_URL = process.env.DATABASE_URL

const ConnectWithDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("DB Connection successful")
        const Food_Items_Colletion = mongoose.connection.db.collection('Food_Items')
        const data = await Food_Items_Colletion.find({}).toArray()
        // console.log(data)
    }
    catch (error) {
        console.log("Fail to connect with DB")
        console.error(error)
    }   
};

module.exports = ConnectWithDB
