const User = require("../models/User");
const verifyId = require("mongoose").Types.ObjectId;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");



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
module.exports.sendMailForget = async(req,res)=>{
    const {email} = req.body;
    let password_reset="";
    console.log(Math.random()*61);
    const word = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1", "2", "3", "4", "5", "6", "7", "8", "9", "10","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i = 0; i < 9; i++) {
        password_reset =password_reset+word[Math.floor(Math.random()*61)]
    }
    console.log(password_reset);
    let password_hash;
    const salt = await bcrypt.genSalt();
    password_hash = await bcrypt.hash(password_reset,salt);
    await User.findOne({email}).then((docs)=>{
        if (docs === null) {
            return res.status(500).json({err:"Aucun compte ne correspond a ce mail"})
        }
    }).catch((error)=>{
        console.log(error);
        return res.status(500).json({err:"Aucun compte ne correspond a ce mail"})
    })
    await User.findOneAndUpdate({email},{$set:{
        password:password_hash,
        reset:true
    }},{upsert:true,setDefaultsOnInsert:true,new:true}).catch((error)=>{
        console.log(error);
        return res.status(500).json({error:"Ressayez ulterieurement"})
    })
   
    
    var transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });
    
      const mailOptions = {
        from: "alby2000kps@gmail.com",
        to: email,
        subject: "Update password ",
        html: "<table style='width: 100%; font-family: Arial; font-size: 18px'><tr style='text-align: center'><td></td><td><img src='https://web.sicmagroup.com/wp-content/uploads/2021/01/SICMaAssocies.png' alt='SICMA Logo'/></td><td></td></tr><tr><td style='height: 20px'></td><td></td><td></td></tr><tr><td style='width: 10%'></td><td style='width: 80%; background-color: #015182; height: 10px'></td><td style='width: 10%'></td></tr><tr><td style='height: 20px'></td><td></td><td></td></tr><tr><td></td><td><b style='font-size: 20px; color: #015182'>"+password_reset+"</b></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td>Par la présente, je viens vous affecter le traitement de la reclamation​:<br /><ul><li>Type de plaintes:<b>Reclamations</b></li><li>Code:<b> rec-15s-sjdsk-sdsds-sd</b></li><li>Client: <b>KPONSO Albericq</b></li><li>Enregistré le :<b>24 Mai 2022</b></li></ul><br />Je reste à votre entière disposition pour tout complément d'informationrelatif à cette reclamation<br />En conséquence,<b>je vous prie de bien vouloir procéder au traitement de cettereclamation dans les delai.</b><br />Cordialement,</td><td></td></tr><tr><td style='height: 20px'></td><td></td><td></td></tr><tr><td style='width: 10%'></td><td style='width: 80%; background-color: #015182; height: 10px'></td><td style='width: 10%'></td></tr></table>",
      };
    
      await transporter.sendMail(mailOptions, function (err, info) {
        if (err){
           console.log(err);
           return res.status(500).json({error:"Ressayez ulterieurement"}) 
        } 
        else{
            return res.status(200).json('Mail envoyé')
        } 
      });
}

