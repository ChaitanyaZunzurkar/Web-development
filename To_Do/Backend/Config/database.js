const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

async function DBConnection() {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("DB connected successfully");
    }
    catch(error) {
        console.log(error)
        console.log("Fail to connect with DB")
        process.exit(1);
    }
}

module.exports = DBConnection
