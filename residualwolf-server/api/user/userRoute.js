const router = require("express").Router();
const controller = require("./userController");

router.get("/getUsers", controller.getUsers);
router.post("/signin", controller.signIn);
router.post("/signup", controller.signUp);
router.post("/admin/signup", controller.adminSignUp);

module.exports = router;
