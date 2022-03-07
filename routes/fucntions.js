const express = require('express')
const router = express.Router()

//Search Page
router.get('/search', (req, res) => {
    res.render('search')
})

//Music Page
router.get('/music', (req, res) => {
    res.render('music')
})

//Search Handle
router.post('/search', (req, res) => {
    let input = req.body.query
    if (input.length < 1) {
        res.redirect('/search')
    }
    else if (input.length == 1) {
        res.redirect(`http://www.baidu.com/s?wd=${input}`)
    } else {
        let engine = input.substring(0, 1)
        let query = input.substring(1, input.length)
        if (engine == 'b') {
            res.redirect(`http://www.baidu.com/s?wd=${query}`)
        }
        else if (engine == 'B') {
            res.redirect(`https://search.bilibili.com/all?keyword=${query}`)
        }
        else if (engine == 'z' || engine == 'Z') {
            res.redirect(`https://www.zhihu.com/search?type=content&q=${query}`)
        }
        else if (engine == 'g' || engine == 'G') {
            res.redirect(`https://www.google.com.hk/search?q=${query}`)
        }
        else {
            res.redirect(`http://www.baidu.com/s?wd=${input}`)
        }
    }

})

module.exports = router