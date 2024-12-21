const User = require('../Models/Users')
const jwt = require('jsonwebtoken')

async function addToCart(req , res) {
    // getting the user from the token 
    // for that we have called auth middleware which will check authorization of the user by fetching token from cookie or bearer token
    const email = req.user.email

    // destructure the information about the food item we will get
    const { img , name,  description , OrderCount } = req.body
    
    // handle if the info is not available 
    if(!img  || !name || !description || !OrderCount) {
        return res.status(400).json({
            success:false,
            message: "Plese send all the required details"
        })
    }

    // find user
    const existingUser = await User.findOne({ email })

    // if not exists then return res
    if(!existingUser) {
        console.log("user does not exists")
        return res.json({
            success: false,
            message: "User does not exists."
        })
    }

    // if exists then update user and add food item in the cart
    const updatedUser = await User.findOneAndUpdate(
        { email },
        { $push : { foodItemsInCart :{ email , img , name,  description , OrderCount } }}
    )

    console.log(updatedUser)
    
    // send res
    res.json({
        success: true,
        message: "User updated successsfully",
        cart: updatedUser.foodItemsInCart
    })
}

module.exports = {
    addToCart,
}