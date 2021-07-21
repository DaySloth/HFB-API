const router = require("express").Router();
const bcrypt = require("bcrypt");
const { uploader } = require("cloudinary").v2;
const { encode, decode } = require("../../util/encoder.js");
const ProductsDb = require("../../util/models/products.js");
const { multerUploads, dataUri } = require("../../util/imageConverter.js");

async function verifyAPIKey(givenKey) {
  return decode(givenKey);
}

router.route("/").get(async (req, res) => {
  ProductsDb.find().then((foundProducts) => {
    res.json(foundProducts);
    res.end();
  });
});

router.route("/create").post(multerUploads, async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    if (req.file) {
      const file = await dataUri(req);
      console.log(file);
      uploader.upload(file).then((result) => {
        req.body = JSON.parse(req.body.data);
        req.body.image = result.url;
        req.body.image_id = result.public_id;
        ProductsDb.create(req.body).then((newProduct) => {
          res.json(newProduct);
        });
      });
    } else {
      req.body = JSON.parse(req.body.data);
      req.body.image =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png";
      req.body.image_id = "nopublicid";
      ProductsDb.create(req.body).then((newProduct) => {
        res.json(newProduct);
      });
    }
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
