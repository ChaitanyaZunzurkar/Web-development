const express = require('express')
const router = express.Router()
const { SignupHandler , validateSignup, validateSignin, SigninHandler } = require('../Controllers/user')

router.post('/signup' , validateSignup , SignupHandler);
router.post('/signin' , validateSignin , SigninHandler)

module.exports = router
