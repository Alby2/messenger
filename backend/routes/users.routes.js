const router = require("express").Router();
const usersController = require("../controllers/users.controllers");



router.get("/",usersController.allUser);

router.get("/:id",usersController.oneUser);

router.put("/:id",usersController.updateUser);

router.delete("/:id",usersController.deleteUser);


module.exports = router;