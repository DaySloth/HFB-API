const router = require("express").Router();
const productRoutes = require("./products.js");
const userRoutes = require("./users.js");

// routes
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
