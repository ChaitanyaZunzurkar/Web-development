const express = require('express')
const router = express.Router()
const { FoodData } = require('../Controllers/FoodData')

router.post('/fooddata', FoodData);

module.exports = router
