const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router
  .get("/", productController.getAllProducts)
  .post("/", productController.createProduct)
  .get("/:id", productController.getProduct)
  .patch("/:id", productController.Updateproduct)
  .delete("/:id", productController.deleteProduct);

  exports.router = router;