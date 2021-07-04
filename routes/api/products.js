const router = require("express").Router();
const bcrypt = require("bcrypt");

function verifyAPIKey (givenKey) {

}

router.route("/").get((req, res) => {
  console.log(req.header("hfb-apikey"));
  res.json({
    Example: "Hello this is working",
  });
});

module.exports = router;
