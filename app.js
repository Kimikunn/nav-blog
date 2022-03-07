const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

//DB config
const db = require('./config/keys').MongoURI

//Connect to MongoDB
mongoose.connect(db)
    .then(console.log('MongoDB connected...'))
    .catch(err => console.log(err))

//Bodyparser
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/', require('./routes/index'))
app.use('/', require('./routes/fucntions'))

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

//Static
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/plugins', express.static(path.join(__dirname, 'plugins')))


const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})