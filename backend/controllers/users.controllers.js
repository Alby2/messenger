const User = require("../models/User")
module.exports.allUser = async(req,res)=>{
    try {
        let users = await User.find().select("-password");
        return res.status(200).json({users})
    } catch (error) {
        return res.status(500).json({error});   
    }
 
}
module.exports.oneUser = async(req,res)=>{
    
    res.status(200).json({message:"nothing"});
}
module.exports.updateUser = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
module.exports.deleteUser = async(req,res)=>{
    console.log(req);
    res.status(200).json({message:"nothing"});
}
