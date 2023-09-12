const mongoose = require('mongoose')
const DB = process.env.Database

mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
    console.log('connection succesfull');
}).catch((err) => console.log('no connection'));