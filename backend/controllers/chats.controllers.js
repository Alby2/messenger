const verify = require('mongoose').Types.ObjectId;
const Users = require("../models/User");
const Groups = require("../models/Group");
const Messages = require("../models/Message");
//Conversation
module.exports.allChat = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.oneChat = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.cleanChat = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.deleteFormMe = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}


