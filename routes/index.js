const express = require('express')
const router = express.Router()

//Dashboard Page 
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/', (req, res) => {
    res.render('dashboard')
})

module.exports = router