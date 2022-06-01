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
module.exports.sendChat = async (req,res)=>{
    // const {sender,message,idConversation,message_tag,tags} = req.body;
     const {sender,idConversation} = req.body;
    if (!verify.isValid(sender) || !verify.isValid(idConversation)) {
        return res.status(500).json({message:"Conversation inexistante"})
    }
    
       let userSend = await Users.findOne({_id:idConversation},{$elemMatch:{conversations:idConversation}})
        console.log(userSend);
        return res.status(200).json({userSend})
    
    
}


