const mongoose = require('mongoose')


const authorSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:30
    },
    
    specialization:{
        type:String,
        trim:true,
        minlength:5,
        maxlength:50
    }

})
module.exports = mongoose.model("Author",authorSchema);
