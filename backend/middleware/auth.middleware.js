const jwt = require("jsonwebtoken");
const Users = require("../models/User")



module.exports.checkUser = async(req,res,next)=>{
    const token = req.cookies.auth
    if(token){
        jwt.verify(token,process.env.TOKEN_AUTH,async (err,decodedToken)   =>{
            if(err){
                res.locals.user = null
                res.cookie("auth","",{maxAge:1});
                next()
            }else{
                console.log(decodedToken);
                let user = await Users.findById(decodedToken.id);
                res.locals.user = user
                next()
            }

        })

    }else{
        res.locals.user = null;
        next()
    }
}

module.exports.requiredAuth = async(req,res,next)=>{
 const token = req.cookies.auth;
  if (token) {
    jwt.verify(token, process.env.TOKEN_AUTH, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(200).json('no token')
      } else {
        next();
      }
    });
  } else {
    console.log('No token');
    res.status(200).json('no token')
  }
}