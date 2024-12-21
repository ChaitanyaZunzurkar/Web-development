const express = require('express')
const router = express.Router()
const { addToCart } = require('../Controllers/BuyAndCart')
const auth = require('../Middleware/auth')

router.post('/cart', auth , addToCart);

module.exports = router
