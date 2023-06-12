const mongoose=require('mongoose')
const courseSchema =new mongoose.Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    course:{
        type:String,
        required:true,
        trim:true
    },
    tags:{
        type:Array,
        trim:true,
        validate:{
            validator:function(v){
                return v && v.length >0;
            },
            message:"A course should have at least on tag"
        }

    },
    isPublished:{
        type:Boolean,
        default:false
    },
    price:{
        type:Number,
        required :function(){
            return this.isPublished
        },
        get:v=>Math.round(v),
        set:v=>Math.round(v)

    },
   
},{timestamps:true})
module.exports = mongoose.model("Course",courseSchema);