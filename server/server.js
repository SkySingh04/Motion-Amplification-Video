const dotenv = require('dotenv')
const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())


dotenv.config({path:'./config.env'})

require('./db/conn')

app.use(express.json())

app.use(require('./router/auth'))



app.listen(3001,() => {
    console.log('Server is running at port 3001');
})