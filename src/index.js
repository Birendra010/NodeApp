const express = require('express')
const mongoose = require('mongoose');
const route = require('./route/route');
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use('/',route);

mongoose.connect("mongodb+srv://birendra:birendra0106@cluster0.qyyrhjk.mongodb.net/Course", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.listen(PORT, ()=> {
    console.log(`Express app running on port ${PORT}...`)
});