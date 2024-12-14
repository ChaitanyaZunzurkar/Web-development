const User = require('../Models/Users')
const { body , validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY

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

        let hashedPassword
        try {
            let salt = await bcrypt.genSalt(10)
            hashedPassword = await bcrypt.hash(password , salt)
        }
        catch(error) {
            res.status(500).json({
                success:false,
                message:"Fail to hash password"
            })
        }

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            location,
        })

        res.status(201).json({
            success:true,
            message:"Signup Successfully",
            User : user
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
            return res.status(400).json({
                success:false,
                errors: errors.array()
            })
        }

        const { email , password } = req.body;
        const user = await User.findOne({ email })

        if(!user) {
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            })
        }

        // creating payload 
        const payload = {
            id: user.id,
            email: user.email
        }

        const compredPassword = await bcrypt.compare(password , user.password)
        if(!compredPassword) {
            return res.status(400).json({
                success:false,
                message:"Invalid email or password."
            })
        }


        const token = await jwt.sign(payload , SECRET_KEY , {
            expiresIn: "24h"
        })

        const options = {
            expires: new Date(Date.now() + 1 * 24 * 60 * 60),
            httpOnly: true
        }

        res.cookie("token" , token , options).status(200).json({
            success:true,
            message:"Signin successful",
            User: {
                name:user.name,
                email:user.email,
                token,
                message: "User login successfully."
            }
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