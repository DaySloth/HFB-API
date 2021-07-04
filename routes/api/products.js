const router = require("express").Router();
const bcrypt = require("bcrypt");
const { encode, decode } = require("../../util/encoder.js");

async function verifyAPIKey(givenKey) {
  return decode(givenKey);
}

router.route("/").get(async (req, res) => {
  const verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    res.json({
      test: "hey its working now",
    });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
