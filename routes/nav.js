const express = require("express");
const router = express.Router()

//Get Bilibili
router.get('/bilibili', (req, res) => {
    res.redirect('http://www.bilibili.com')
})

//Get Youtube
router.get('/youtube', (req, res) => {
    res.redirect('http://www.youtube.com')
})

module.exports = router
