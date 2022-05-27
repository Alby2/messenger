const verify = require("mongoose").Types.ObjectId;
const Groups = require('../models/Group');
const Users = require("../models/User");
const message = require("../models/Message");

module.exports.allGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.oneGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.deleteGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.cleanGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.exitGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.joinGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}

module.exports.inviteGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}

module.exports.seeInviteGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.confirmInviteGroup = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}