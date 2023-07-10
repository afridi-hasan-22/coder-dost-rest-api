const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const users = data.users;
// const index = fs.readFileSync("./index.html", "utf-8");



exports.getAllProducts = (req, res) => {
  res.json(users);
};



exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getProduct = (req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
  const product = users.find((pr) => pr.id === id);
  res.json(product);
};

exports.Updateproduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((pr) => pr.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 2, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productsIndex = users.findIndex((pr) => pr.id === id);
  const product = users[productsIndex];
  users.splice(productsIndex, 1);
  res.status(201).json(product);
};
