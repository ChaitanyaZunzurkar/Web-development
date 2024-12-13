const express = require('express')
const router = express.Router()
const { SignupHandler } = require('../Controllers/user')

router.post('/signup' , SignupHandler);

module.exports = router
