const router = require("express").Router();
const productRoutes = require("./products");

// routes
router.use("/products", productRoutes);

module.exports = router;
