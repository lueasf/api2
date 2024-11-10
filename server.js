const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/followers') // bd url
const db = mongoose.connection


app.listen(3000, () => console.log('Server on port 3000'))