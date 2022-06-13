const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    idConversation:{type:mongoose.Schema.Types.ObjectId,ref:'Conversation'},
    tags:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
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
    message_tag:{type:mongoose.Schema.Types.ObjectId,ref:'Conversation'},
    read_by:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}]
              
    
},{timestamps:true});
module.exports = mongoose.model("Message",MessageSchema)