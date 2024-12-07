const expres = require('express')
const User = require('../Models/user')

async function signin(req, res) {
    try{
        const { email , password } = req.body;
        const user = await User.findOne({ email })

        if(user.password === password) {
            res.status(200).json({
                success: true,
                user : {
                    name: user.email,
                    email: user.email,
                    tasks :user.tasks
                },
                message: "Signin Successfully"
            })
        }
        else {
            res.json({
                success: false,
                message: "email or password incorrect."
            })
        }
    }
    catch(error) {
        console.log("Fail to signin.")
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Fail to signin."
        })
    }
}

async function signup(req, res) {
    try{
        const { name , email , password } = req.body;
        const newUser = new User({
            name,
            email,
            password,
            tasks: []
        })
        const saveUser = await newUser.save()
        console.log(saveUser);

        res.status(200).json({
            success: true,
            user : saveUser,
            message: "Signup Successfully"
        })
    }
    catch(error) {
        console.log("Fail to signup.")
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Fail to signup."
        })
    }
}


async function addTasks(req , res) {
    const { email , title} = req.body;
    try {
        let updatedUsers = await User.updateOne(
            { email },
            { $push : { tasks : { title : title } } }
        )

        const user = await User.findOne({email})
        console.log(user)

        res.status(200).json({
            success: true,
            tasks: user.tasks,
            message: "Task added successfully."
        })
    }
    catch(error) {
        console.log("Fail to add task.")
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Fail to add task."
        })
    }
}


module.exports = {
    addTasks,
    signin,
    signup,
}