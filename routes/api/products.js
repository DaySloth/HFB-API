const router = require("express").Router();
const bcrypt = require("bcrypt");
const { encode, decode } = require("../../util/encoder.js");
const ProductsDb = require("../../util/models/products.js");

async function verifyAPIKey(givenKey) {
  return decode(givenKey);
}

router.route("/").get(async (req, res) => {
  ProductsDb.find().then((foundProducts) => {
    res.json(foundProducts);
    res.end();
  });
});

router.route("/create").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    ProductsDb.create(req.body).then((newProduct) => {
      res.json(newProduct);
    });
  } else {
    res.sendStatus(403);
  }
});

router.route("/update/:id").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    ProductsDb.findOneAndUpdate({ _id: req.params.id }, req.body, {
      returnOriginal: false,
    })
      .then((updatedProduct) => {
        res.sendStatus(200);
      })
      .catch((err) =>
        res.status(422).send("******** Error updating product *********")
      );
  } else {
    res.sendStatus(403);
  }
});

router.route("/delete/:id").get(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    ProductsDb.deleteOne({ _id: req.params.id })
      .then((deletedProduct) => {
        res.sendStatus(200);
      })
      .catch((err) =>
        res.status(422).send("******** Error deleting product *********")
      );
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
