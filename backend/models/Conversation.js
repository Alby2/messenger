const mongoose = require("mongoose")


const ConversationSchema = new mongoose.Schema({
    theme:{
        type:String,
        default:'ordinaire'
    },
    emoji:{
        type:String,
        default:'like'
    },
    pseudo:{
        type:Array,
        default:[],
    },
    state:{
        type:Array,
        default:[],
    },
    color:{
        type:String,
        default:"default"
    },
    users:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    wordeffect:{
        type:Array,
        default:[]
    }

},{timestamps:true});


module.exports = mongoose.model("Conversation",ConversationSchema);