const User = require("../models/User")
const verify = require('mongoose').Types.ObjectId


module.exports.allUser = async(req,res)=>{
   
        const users = await User.find().select("-password");
        return res.status(200).json(users)
   
 
}
module.exports.oneUser = async(req,res)=>{
    const {id} = req.params;

    if(!verify.isValid(id)){
        return res.status(500).json({error:"Utilisateur inexistant"});
    }
    try {
        User.findById(id,(err,docs)=>{
            if (err || docs== null ) {
                return res.status(500).json({err})
            }
            return res.status(200).json(docs)  
        })
    } catch (error) {
        return res.status(500).json({error});
    }
}
module.exports.updateUser = async(req,res)=>{
    const {bio,sexe,number,lastname,firstname} = req.body;
    const {id} =req.params;
    if(!verify.isValid(id)){
        return res.status(500).json({error:"Utilisateur inexistant"});
    }
    try {
        await User.findByIdAndUpdate(id,{$set:{bio,sexe,number,lastname,firstname}},{setDefaultsOnInsert:true,upsert:true,new:true}).then((docs)=>{
            return res.status(200).json(docs);
        }).catch((err)=>{
            return res.status(500).json(err)
        })
    } catch (error) {
        return res.status(500).json({error});
    }
    res.status(200).json({message:"nothing"});
}
module.exports.deleteUser = async(req,res)=>{
    const {id} =req.params;
    if(!verify.isValid(id)){
        return res.status(500).json({error:"Utilisateur inexistant"});
    }
    try {
        await User.findOneAndRemove({_id:id}).exec();
        return res.status(200).json({message:"Compte suppprimé"})
    } catch (error) {
        return res.status(500).json({error});
    }
}
