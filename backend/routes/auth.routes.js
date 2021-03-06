const router = require("express").Router();
const authCntrl = require("../controllers/auth.controllers")

router.post("/connexion",authCntrl.login);

router.post("/inscription",authCntrl.sign);

router.put("/forget",authCntrl.forget);

router.post("/send/mail",authCntrl.sendMailForget);

router.get("/logout",authCntrl.logout)


module.exports = router