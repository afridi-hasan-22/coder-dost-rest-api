const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;
// const index = fs.readFileSync("./index.html", "utf-8");



exports.getAllProducts = (req, res) => {
  res.json(products);
};



exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};

exports.getProduct = (req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
  const product = products.find((pr) => pr.id === id);
  res.json(product);
};

exports.Updateproduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((pr) => pr.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 2, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productsIndex = products.findIndex((pr) => pr.id === id);
  const product = products[productsIndex];
  products.splice(productsIndex, 1);
  res.status(201).json(product);
};
