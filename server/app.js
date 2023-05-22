const express = require("express");
let fs = require("fs");
const app = express();
const chartRouter = require("./routes/chart");
let bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const MongoClient = require("mongodb").MongoClient;
let db;
MongoClient.connect(process.env.DB_URL, function (error, client) {
  if (error) {
    return console.log(error);
  }
  db = client.db("txtData");

  app.listen("8040", (req, res, next) => {
    console.log("실행완료");
  });
});
app.use("/chart", chartRouter);