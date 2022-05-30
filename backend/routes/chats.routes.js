const router = require("express").Router();

const chatsController = require("../controllers/chats.controllers");

// Mes conversations
router.get("all",chatsController.allChat);

router.get("one",chatsController.oneChat);

router.delete("delete/:id",chatsController.deleteFormMe);

router.put(":id/clean",chatsController.cleanChat);



module.exports = router;
