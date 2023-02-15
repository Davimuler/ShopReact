import mongoose from "mongoose";

const ItemSchema=new mongoose.Schema({
    fullName:{
        type:String ,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    characteristics:{
        type:Array,
        default:[],
    },
    viewCounts:{
        type:Number,
        default: 0
    },
    section:{
        type:String,
        required:true
    },
    image:String

},{
    timestamps:true,
})

export default mongoose.model('Item',ItemSchema);