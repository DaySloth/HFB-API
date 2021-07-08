const router = require("express").Router();
const bcrypt = require("bcrypt");
const { encode, decode } = require("../../util/encoder.js");
const ProductsDb = require("../../util/models/products.js");
const {
  getAll,
  getAllCategories,
  getAllSubCategories,
  getAllProducts,
  createCategory,
  createSubCategory,
  createProduct,
  updateProduct,
} = require("../../util/controllers/products.js");

async function verifyAPIKey(givenKey) {
  return decode(givenKey);
}

router.route("/").get(async (req, res) => {
  // ProductsDb.find().then((foundProducts) => {
  //   res.json(foundProducts);
  //   res.end();
  // });
  const results = await getAll();
  res.json(results);
  res.end();
});

router.route("/categories").get(async (req, res) => {
  // ProductsDb.find().then((foundProducts) => {
  //   res.json(foundProducts);
  //   res.end();
  // });
  const results = await getAllCategories();
  res.json(results);
  res.end();
});

router.route("/sub-categories").get(async (req, res) => {
  // ProductsDb.find().then((foundProducts) => {
  //   res.json(foundProducts);
  //   res.end();
  // });
  const results = await getAllSubCategories();
  res.json(results);
  res.end();
});

router.route("/all-products").get(async (req, res) => {
  // ProductsDb.find().then((foundProducts) => {
  //   res.json(foundProducts);
  //   res.end();
  // });
  const results = await getAllProducts();
  res.json(results);
  res.end();
});

router.route("/create/category").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    // ProductsDb.create(req.body).then((newProduct) => {
    //   res.json(newProduct);
    // });
    const result = await createCategory(req.body);
    if (result.affectedRows === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(403);
  }
});

router.route("/create/sub-category").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    // ProductsDb.create(req.body).then((newProduct) => {
    //   res.json(newProduct);
    // });
    const result = await createSubCategory(req.body);
    if (result.affectedRows === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(403);
  }
});

router.route("/create/product").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    // ProductsDb.create(req.body).then((newProduct) => {
    //   res.json(newProduct);
    // });
    const result = await createProduct(req.body);
    if (result.affectedRows === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(403);
  }
});

router.route("/update-product/:id").post(async (req, res) => {
  let verified = await verifyAPIKey(req.header("hfb-apikey"));
  if (verified) {
    // ProductsDb.findOneAndUpdate({ _id: req.params.id }, req.body, {
    //   returnOriginal: false,
    // })
    //   .then((updatedProduct) => {
    //     res.sendStatus(200);
    //   })
    //   .catch((err) =>
    //     res.status(422).send("******** Error updating product *********")
    //   );
    const updatedProduct = await updateProduct(
      req.body.update,
      parseInt(req.params.id)
    );
    if (updatedProduct.changedRows === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
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
