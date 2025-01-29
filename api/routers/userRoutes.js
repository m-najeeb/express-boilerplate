const { Router } = require("express");
const UserController = require("../controllers/userControllers");

const router = Router();

router.post("/sign-up", UserController.signUp);

module.exports = router;
