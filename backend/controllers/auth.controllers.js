const User = require("../models/User");
const verifyId = require("mongoose").Types.ObjectId;



module.exports.login = async(req,res)=>{
    
}

module.exports.sign = async(req,res)=>{
    const {firstname,lastname,password,email} = req.body;
    
    try {
        await User.findOne({email}).then((docs)=>{
            if (JSON.stringify(docs) !== '{}') {
                return res.status(500).json("Email invalide pour une inscirption")
            }
        }).catch((err)=>{
            return res.status(500).json(err)
        })
        const users = await User.create({firstname,lastname,password,email});
        return res.status(201).json({user:users._id});
    } catch (err) {
        return res.status(500).json({err})
    }
}

module.exports.logout = async(req,res)=>{


}

module.exports.forget = async(req,res)=>{

}

