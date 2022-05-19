const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    admin:{
        type:String,
        required:true,
    },
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
    exclu:{
        type:Array,
        default:[]
    },
    type:{
        type:String,
        default:"public"
    },
    bio:{
        type:String,
        default:""
    },
    otherAdmin:{
        type:Array,
        default:[]
    },
    link:{
        type:String,
        default:""
    }
},{timestamps:true});


module.exports = mongoose.model("Group",GroupSchema)