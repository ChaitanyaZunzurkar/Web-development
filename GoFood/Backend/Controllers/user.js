const User = require('../Models/Users')
const { body , validationResult } = require('express-validator')

const validateSignup = [
    body('name').notEmpty().withMessage("Name should not be empty"),
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({ min : 6 }).withMessage("Password must be at least 6 characters long"),
    body('location').notEmpty().withMessage("Name should not be empty")
];

const validateSignin = [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({ min : 6 }).withMessage("Password must be at least 6 characters long")
];

async function SignupHandler(req , res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success:false,
                errors: errors.array()
            })
        }

        const { name , email , location , password } = req.body;
        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:"User with this email already exists"
            })
        }

        const user = await User.create({
            name,
            email,
            password,
            location,
        })

        res.status(201).json({
            success:true,
            message:"Signup Successfully",
            User : {
                name:user.name,
                email:user.email,
            }
        })
    }
    catch(error) {
        console.error("Signup Error:", error);
        res.status(500).json({
            success:false,
            message:"Fail to Signup"
        })
    }
}

async function SigninHandler(req ,res) {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.status(400).json({
                success:false,
                errors: errors.array()
            })
        }
        const { email , password } = req.body;
        const user = await User.findOne({ email })

        if(!user) {
            return res.status(400).json({
                success:false,
                message:"Invalid email or password."
            })
        }

        if(user.password !== password) {
            return res.status(400).json({
                success:false,
                message:"Invalid email or password."
            })
        }

        res.status(200).json({
            success:true,
            message:"Signin successful"
        })
    }
    catch(error) {
        console.error("Signin Error:", error);
        res.status(500).json({
            success:false,
            message:"Fail to Signin"
        })
    }
}

module.exports = {
    SignupHandler,
    validateSignup,
    SigninHandler,
    validateSignin
}