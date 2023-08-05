
const express = require("express");
const { loginController, registerController } = require("../controller/userAuth");
const {friendListsController, friendController} =  require("../controller/friendlist");

const router = express.Router();

router.post("/login", loginController)

router.post("/register", registerController)

router.get("/friendlists", friendListsController)

router.get("/friendlists/:id", friendController)

module.exports = router