if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB) // bd url
const db = mongoose.connection

db.on('error', (error) => console.error(error)) //gestion des erreurs
db.once('open', () => console.log('Connected to db'))

app.use(express.json()) // middleware pour parser le json en express

const followersRouter = require('./routes/followers')
app.use('/followers', followersRouter)

app.listen(3000, () => console.log('Server on port 3000'))