const router = require("express").Router();
const productRoutes = require("./products.js");

// routes
router.use("/products", productRoutes);

module.exports = router;
