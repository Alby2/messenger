const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors")


//Variable d'environnement
require('dotenv').config({ path: './config/.env' });
//Body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//Connexion à la base de donnée
require("./config/db");


//Routes
const usersRoutes = require("./routes/users.routes");
const chatRoutes = require("./routes/chats.routes");
const friendRoutes = require("./routes/friends.routes");
const authRoutes = require("./routes/auth.routes");
const { checkUser, requiredAuth } = require("./middleware/auth.middleware");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: process.env.URL_FRONTEND,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }))

app.use(cookieParser())

app.get('*', checkUser);
app.get('/api/v1/checkAuth/id', requiredAuth, (req, res) => {
  res.status(200).send(res.locals.user)
});
//Auth
app.use("/api/v1/auth",authRoutes);


//Users
app.use("/api/v1/user",usersRoutes);

//Chat
app.use("/api/v1/chat",chatRoutes);

// ADD & CONFIRM & ADD LIST

app.use("/api/v1/friends",friendRoutes);



app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server start");
})