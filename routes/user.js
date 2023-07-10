const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router
  .get("/", userController.getAllProducts)
  .post("/", userController.createProduct)
  .get("/:id", userController.getProduct)
  .patch("/:id", userController.Updateproduct)
  .delete("/:id", userController.deleteProduct);

  exports.router = router;