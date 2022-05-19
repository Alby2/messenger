const router = require("express").Router();
const friendsController = require("../controllers/friends.controllers");


//Mes amis 
router.post("/all",friendsController.allFriend)

//Mes amis en ligne
router.post("/online",friendsController.allFriendOnline)



module.exports = router;



