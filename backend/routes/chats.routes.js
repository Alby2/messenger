const router = require("express").Router();

const chatsController = require("../controllers/chats.controllers");

// Mes conversations
router.post("all",chatsController.allChat);

router.get("one",chatsController.oneChat);


module.exports = router;
