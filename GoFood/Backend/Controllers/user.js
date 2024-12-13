const User = require('../Models/Users')

async function SignupHandler(req , res) {
    try {
        const { name , email , location , password } = req.body;
        
        // console.log("user info : ")
        // console.log(name , email , location , password)

        const user = await User.create({
            name,
            email,
            password,
            location,
        })

        res.json({
            success:true,
            message:"Signup Successfully",
            User : user
        })
    }
    catch(error) {
        res.json({
            success:false,
            message:"Fail to Signup"
        })
    }
}

module.exports = {
    SignupHandler
}