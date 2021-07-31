const router = require("express").Router();
const bcrypt = require("bcrypt");
const { encode, decode } = require("../../util/encoder.js");
const UsersDb = require("../../util/models/users.js");
const randomPassGen = require("secure-random-password");
const { sendEmail, sendSMS } = require("../../util/sender.js");

async function verifyAPIKey(givenKey) {
  return decode(givenKey);
}

router.route("/").get(async (req, res) => {
  //get all users
  try {
    let dbUsers = await UsersDb.find({});
    res.send(dbUsers);
    res.end();
  } catch (error) {
    res.sendStatus(403);
  }
});

router.route("/:id").get(async (req, res) => {
  //get user by id
});

router.route("/create").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //create user
    try {
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        req.body.password = hashedPass;

        UsersDb.create(req.body).then((createdUser) => {
          res.sendStatus(200);
        });
      });
    } catch (error) {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
});

router.route("/update/:id").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //update user
  } else {
    res.sendStatus(403);
  }
});

router.route("/delete/:id").get(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //delete user
  } else {
    res.sendStatus(403);
  }
});

router.route("/login").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //login user
    const foundUser = await UsersDb.findOne({ email: req.body.email });
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
        if (err) {
          res.sendStatus(404);
        } else if (result) {
          res.send({
            first_name: foundUser.first_name,
            last_name: foundUser.last_name,
            email: foundUser.email,
            isTempPassword: foundUser.isTempPassword,
          });
          res.end();
        } else {
          res.sendStatus(404);
        }
      });
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(403);
  }
});

router.route("/reset-password/:id").get(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //reset user password
    const randomPassword = randomPassGen.randomPassword({
      length: 5,
      characters: [
        randomPassGen.lower,
        randomPassGen.upper,
        randomPassGen.digits,
      ],
    });
    UsersDb.findOneAndUpdate(
      { _id: req.params.id },
      { password: randomPassword, isTempPassword: true },
      { returnOriginal: false }
    ).then((result) => {
      //send email
      if (result.email) {
        sendEmail(
          result.email,
          "Reset Password Code",
          `Your new password is: ${randomPassword}`
        );
      }
      if (result.phone_number) {
        sendSMS(
          `HFB Mobile Support - Your password has been reset, please check your email`,
          result.phone_number
        );
      }
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
