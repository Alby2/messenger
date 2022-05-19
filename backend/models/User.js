 const mongoose = require("mongoose");

 const userSchema = new mongoose.Schema({
    
    firstname:{
        type:String,
        require:true,
        maxlength:20,
        minlength:3
    },
    lastname:{
        type:String,
        require:true,
        maxlength:20,
        minlength:3
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email:{
        type:String,
        require:true,
    },
    number:{
        type:String,
        default:"+229 XX XX XX XX",
        maxlength:20
    },
    sexe:{
        type:String,
        default:"-"
    },
    bio:{
        type:String,
        default:"-"
    },
    picture:{
        type:Array,
        default:[],
    },
    friends:{
        type:Array,
        default:[],
    },
    confirm:{
        type:Array,
        default:[],
    },
    invit:{
        type:Array,
        default:[],
    },
    online:{
        type:Date,
        default : mongoose.now()
    },
    conversations:{
        type:Array,
        default:[]
    },
    groups:{
        type:Array,
        default:[],
    },
    groupsInvit:{
        type:Array,
        default:[]
    }


 },{timestamps:true})


 module.exports = mongoose.model("User",userSchema)