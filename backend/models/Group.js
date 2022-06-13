const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    admin:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    name:{
        type:String,
        required:true,
    },
    theme:{
        type:String,
        default:'ordinaire'
    },
    emoji:{
        type:String,
        default:'like'
    },
    state:{
        type:Array,
        default:[],
    },
    exclu:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    type:{
        type:String,
        default:"public"
    },
    bio:{
        type:String,
        default:""
    },
    otherAdmin:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    link:{
        type:String,
        default:""
    },
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
},{timestamps:true});


module.exports = mongoose.model("Group",GroupSchema)