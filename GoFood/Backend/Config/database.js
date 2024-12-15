const mongoose = require('mongoose');
require('dotenv').config()

const DATABASE_URL = process.env.DATABASE_URL

const ConnectWithDB = async (req , res) => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("DB Connection successful")

        const Food_Items_Collection = mongoose.connection.db.collection('Food_Items');
        const Food_Items_Data = await Food_Items_Collection.find({}).toArray();

        const Food_Category_Collection = mongoose.connection.db.collection('Food_Category');
        const Food_Category_Data = await Food_Category_Collection.find({}).toArray();

        // global.Food_Category_Data = JSON.stringify(Food_Category_Data);
        // global.Food_Items_Data = JSON.stringify(Food_Items_Data);

        global.Food_Category_Data = Food_Category_Data
        global.Food_Items_Data = Food_Items_Data

        // console.log("Food Category Data:", global.Food_Category_Data);
        // console.log("Food Items Data:", global.Food_Items_Data);
    }
    catch (error) {
        console.log("Fail to connect with DB")
        console.error(error)
    }   
};

module.exports = ConnectWithDB
