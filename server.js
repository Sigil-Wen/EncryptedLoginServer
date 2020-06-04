const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); 

const app = express()
const port = process.env.PORT 

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully')
})

const loginRouter = require('./routes/login.js')
const signupRouter = require('./routes/signup.js')

app.use('/login', loginRouter)
app.use('/signup', signupRouter)

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})