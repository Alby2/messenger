const router = require('express').Router();
const groupsCntrl = require('../controllers/groups.controllers');
const { route } = require('./auth.routes');

router.get("all",groupsCntrl.allGroup);

router.get("one",groupsCntrl.oneGroup)

router.put(":id/exit",groupsCntrl.exitGroup);

router.put(":id/join",groupsCntrl.joinGroup);

router.delete(":id/delete",groupsCntrl.deleteGroup);

router.put(":id/clean",groupsCntrl.cleanGroup);

router.put(":id/invite",groupsCntrl.inviteGroup);


router.post("invites",groupsCntrl.seeInviteGroup);

router.put("confirm/:id/invite",groupsCntrl.confirmInviteGroup)

module.exports = router;