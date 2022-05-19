const app = require("express")();
require('dotenv').config({ path: './config/.env' });

//Connexion à la base de donnée
require("./config/db");


//Routes
const usersRoutes = require("./routes/users.routes");
const chatRoutes = require("./routes/chats.routes");
const friendRoutes = require("./routes/friends.routes")




//Users
app.use("/api/v1/user",usersRoutes);

//Chat
app.use("/api/v1/chat",chatRoutes);

// ADD & CONFIRM & ADD LIST

app.use("/api/v1/friends",friendRoutes);



app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server start");
})