const verify = require('mongoose').Types.ObjectId;
const Users = require("../models/User");
const Groups = require("../models/Group");
const Messages = require("../models/Message");
//Conversation
module.exports.oneChat = async(req,res)=>{
    const {idConversation,sender} = req.params
    if (!verify.isValid(sender) || !verify.isValid(idConversation)) {
        return res.status(500).json({message:"Conversation inexistante"})
    }

    let conversations = []
    let groups = []
    let user = []
        await Users.findOne({_id:sender}).then((docs)=>{
         conversations = docs.conversations
         groups = docs.groups
         user = docs
       }).catch((err)=>{
           console.log(err);
        return res.status(500).json("Erreur")
       })
       if (conversations.includes(idConversation)) {
           await Messages.findById(idConversation).then((docs)=>{
               return res.status(200).json(docs)
           }).catch((e)=>{
               return res.status(500).json({error:"Erreur"})
           })
           
       }else if(groups.includes(idConversation)){
            await Messages.findById(idConversation).then((docs)=>{
                return res.status(200).json(docs)
            }).catch((e)=>{
                return res.status(500).json({error:"Erreur"})
            })
       }else{
        return res.status(500).json("Vous ne pouvez pas acceder a cette conversation")
       }

}
module.exports.allChat = async(req,res)=>{
     
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
    const {sender,message,idConversation,message_tag,tags} = req.body;
 
    if (!verify.isValid(sender) || !verify.isValid(idConversation)) {
        return res.status(500).json({message:"Conversation inexistante"})
    }
    let conversations = []
    let groups = []
    let user = []
        await Users.findOne({_id:sender}).then((docs)=>{
         conversations = docs.conversations
         groups = docs.groups
         user = docs
       }).catch((err)=>{
           console.log(err);
        return res.status(500).json("Erreur")
       })
       if (conversations.includes(idConversation)) {
           await Messages.create({sender,idConversation,tags,message,message_tag,read_by :[{id:user._id,name:user.firstname,time:new Date('Y-m-d H:m:s')}]})
           return res.status(201).json("Message envoye ")
       }else if(groups.includes(idConversation)){
            await Messages.create({sender,idConversation,tags,message,message_tag,type_conversation :"groups",read_by :[{id:user._id,name:user.firstname,time:new Date('Y-m-d H:m:s')}]})
            return res.status(201).json("Message envoye dans un group ")
       }else{
        return res.status(500).json("Vous ne pouvez pas envoyer de message")
       }
        

    
}


