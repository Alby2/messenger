const User = require("../models/User");
const verifyId = require("mongoose").Types.ObjectId;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



module.exports.login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email})
        if (user) {
            console.log(password);
            console.log(user.password);
            const result =await bcrypt.compare(password,user.password);
            if (result) {
                let id = user._id
                const token_auth = await jwt.sign({id},process.env.TOKEN_AUTH,{expiresIn:30*24*60*60*1000})
                res.cookie("auth",token_auth,{httpOnly:true,maxAge:30*24*60*60*1000})
                return res.status(200).json({success:"Connexion success"})
            }
            return res.status(500).json({err:"Information invalide"})
        }else{
            return res.status(500).json({err:"Information invalide"})
        }
    } catch (error) {
        return res.status(500).json({err})
    }
}

module.exports.sign = async(req,res)=>{
    const {firstname,lastname,password,email} = req.body;
    
    try {
        await User.findOne({email}).then((docs)=>{
            
            if (docs !== null) {
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
    res.cookie("auth","",{maxAge:1});
    res.redirect("api/user");
}

module.exports.forget = async(req,res)=>{

}

