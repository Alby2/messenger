const router = require("express").Router();
const friendsController = require("../controllers/friends.controllers");


//Mes amis 
router.post("/all",friendsController.allFriend)

//Mes amis en ligne
router.post("/online",friendsController.allFriendOnline)

router.put("/:id/add",friendsController.addFriend)

router.put("/:id/confirm",friendsController.confirmFriend)

router.put("/:idMe/refuse",friendsController.refuseConfirmFriend)

router.put("/:idMe/retire",friendsController.retirerFriend)

module.exports = router;



