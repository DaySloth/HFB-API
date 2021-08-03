const router = require("express").Router();
const bcrypt = require("bcrypt");
const { encode, decode } = require("../../util/encoder.js");
const UsersDb = require("../../util/models/users.js");
const randomPassGen = require("secure-random-password");
const { sendEmail, sendSMS } = require("../../util/sender.js");

async function verifyAPIKey(givenKey) {
  return decode(givenKey);
}

function genSecureRandomPassword() {
  return new Promise((resolve, reject) => {
    let randomPassword = randomPassGen.randomPassword({
      length: 5,
      characters: [
        randomPassGen.lower,
        randomPassGen.upper,
        randomPassGen.digits,
      ],
    });
    bcrypt.hash(randomPassword, 10, (err, hashedPass) => {
      resolve({ plainText: randomPassword, secure: hashedPass });
    });
  });
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
  try {
    let dbUser = await UsersDb.findById(req.params.id);
    res.send(dbUser);
    res.end();
  } catch (error) {
    res.sendStatus(403);
  }
});

router.route("/create").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //create user
    let duplicateUser = await UsersDb.find({ email: req.body.email });
    if (duplicateUser[0]) {
      res.sendStatus(409);
    } else {
      try {
        let randomTempPassword;
        if (req.body.isTempPassword) {
          const { plainText, secure } = await genSecureRandomPassword();
          req.body.password = secure;
          randomTempPassword = plainText;
        }

        UsersDb.create(req.body).then((createdUser) => {
          sendEmail(
            req.body.email,
            "Account created with temporary password",
            randomTempPassword
          );
          sendSMS(
            "HFB Mobile Support - Your account was created with a temporary password, please check your email",
            req.body.phone_number
          );
          res.sendStatus(200);
        });
      } catch (error) {
        res.sendStatus(403);
      }
    }
  } else {
    res.sendStatus(403);
  }
});

router.route("/update/:id").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //update user
    UsersDb.findByIdAndUpdate(req.params.id, req.body, {
      returnOriginal: false,
    }).then((updatedUser) => {
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(403);
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //delete user
    UsersDb.findByIdAndDelete(req.params.id).then((response) => {
      if (response) {
        res.sendStatus(200);
      } else res.sendStatus(403);
    });
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
            hasWebAccess: foundUser.hasWebAccess,
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

router.route("/login/temp-password").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //change password and login user
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
      UsersDb.findOneAndUpdate(
        { email: req.body.email },
        {
          isTempPassword: false,
          password: hashedPass,
        },
        { returnOriginal: false }
      ).then((updatedUser) => {
        res.send({
          first_name: updatedUser.first_name,
          last_name: updatedUser.last_name,
          email: updatedUser.email,
          isTempPassword: updatedUser.isTempPassword,
          hasWebAccess: updatedUser.hasWebAccess,
        });
        res.end();
      });
    });
  }
});

router.route("/reset-password/:id").get(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //reset user password
    const { plainText, secure } = await genSecureRandomPassword();
    UsersDb.findOneAndUpdate(
      { _id: req.params.id },
      { password: secure, isTempPassword: true },
      { returnOriginal: false }
    ).then((result) => {
      //send email
      if (result.email) {
        sendEmail(
          result.email,
          "Reset Password Code",
          `Your new password is: ${plainText}`
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

router.route("/reset-password/email").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    //reset user password
    const { plainText, secure } = await genSecureRandomPassword();
    UsersDb.findOneAndUpdate(
      { email: req.body.email },
      { password: secure, isTempPassword: true },
      { returnOriginal: false }
    ).then((result) => {
      //send email
      if (result.email) {
        sendEmail(
          result.email,
          "Reset Password Code",
          `Your new password is: ${plainText}`
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
