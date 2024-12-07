const expres = require('express')
const router = expres.Router()
const { addTasks , signin , signup } = require('../Controllers/user')

router.post('/todo' , addTasks);
router.post('/signin' , signin);
router.post('/signup' , signup);

module.exports = router;