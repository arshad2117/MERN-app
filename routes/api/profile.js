const express = require("express");
const router = express.Router();

//@route    routes/api/test
//@description tests profile api
//@access public

router.get("/test", (req, res) => res.json({ msg: "IT WORKS" }));

module.exports = router;
