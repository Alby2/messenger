const mongoose = require("mongoose");
require("dotenv").config({"path":"./.env"});


mongoose.connect(process.env.URL_DATABASE,{useNewUrlParser: true, useUnifiedTopology: true}).then((response)=>{
    console.log("Database start");
}).catch((e)=>{
    console.log("Database don't start,Retry ...");
})
module.exports.mongoose;