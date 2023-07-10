const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
require('dotenv').config()

console.log(process.env.DB_PASSWORD);


server.use(express.json());
server.use(morgan("default"));
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
// server.use(express.static(public));


// MVC ---Model View Controller


server.listen(process.env.PORT, () => {
  console.log("Server is listening on port 5000");
});

//connect with mongodb shell: mongosh "mongodb+srv://cluster0.mczmdix.mongodb.net/ecommerceTestDB" --apiVersion 1 --username admin

//connect with compass : mongodb+srv://admin:H2JFsf8QOyOAZjfJ@cluster0.mczmdix.mongodb.net/ecommerceTestDB

//database user : name: afridi2023 pass: N7cD8z1lR3imblrD
//database accesss main : name : admin pass: H2JFsf8QOyOAZjfJ

// আমরা dotenv ব্যবহার করব যাতে আমাদের ডাটাবেসের পাসওয়ার্ড সিকিউর থাকে ।

