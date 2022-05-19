const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    conversation:{
        type:String,
        required:true,

    },
    tags:{
        type:Array,
        default:[]
    },
    message:{
        type:String,
        min:1,
        default:"-"
    },
    type_message:{
        type:String,
        default:"message"
    },
    url:{
        type:String,
        default:""
    },
    type_conversation:{
        type:String,
        enum:["group","conversation","canal"],
        default:"conversation"
    },
    message_tag:{
        type:Array,
        default:[]
    }
},{timestamps:true});
module.exports = mongoose.model("Message",MessageSchema)