const express = require("express");
let fs = require("fs");
const app = express();
let bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const MongoClient = require("mongodb").MongoClient;
let db;
MongoClient.connect(process.env.DB_URL, function (error, client) {
  //연결되면 할일
  if (error) {
    return console.log(error);
  }
  db = client.db("txtData");

  app.listen("8040", (req, res, next) => {
    console.log("실행완료");
  });
});

app.get("/chart/graph/show/:id", (req, res, next) => {
  req.params.id = Number(req.params.id) - 1;
  console.log(req.params.id);
  let data = db
    .collection("data")
    .find()
    .toArray((reqs, data) => {
      let task1Data = [];
      console.log(data.length);
      let recently = data.length - 1;
      console.log(recently);
      if (req.params.id < 5) {
        for (let i = 0; i < data[recently].box1.length; i++) {
          task1Data.push(data[recently].box1[i][req.params.id]);
        }
      } else {
        req.params.id = req.params.id - 5;
        for (let i = req.params.id; i < data[recently].box1.length; i += 5) {
          for (let j = 0; j < data[recently].box1[0].length; j++) {
            task1Data.push(data[recently].box1[i][j]);
          }
        }
      }
      console.log(task1Data);
      let core1 = [];
      let core2 = [];
      let core3 = [];
      let core4 = [];
      let core5 = [];
      let maxList = [];
      let minList = [];
      let avgList = [];
      let varList = [];
      let stdList = [];
      let max = 0;
      let min = 0;
      let avg = 0;
      let dev = [];
      let vari = 0;
      let std = 0;
      for (let i = 0; i < task1Data.length; i++) {
        if (i % 5 == 0) {
          core1.push(task1Data[i]);
        } else if (i % 5 == 1) {
          core2.push(task1Data[i]);
        } else if (i % 5 == 2) {
          core3.push(task1Data[i]);
        } else if (i % 5 == 3) {
          core4.push(task1Data[i]);
        } else if (i % 5 == 4) {
          core5.push(task1Data[i]);
        }
      }
      for (let j = 0; j < core1.length; j++) {
        max = Math.max(...core1);
        min = Math.min(...core1);
        avg = core1.reduce((cur, pre) => cur + pre);
        avg = avg / core1.length;
        dev[j] = core1[j] - avg;
        dev[j] = Math.pow(dev[j], 2);
        vari = dev.reduce((cur, pre) => cur + pre); //분산
        vari = vari / core1.length;
        std = Math.sqrt(vari);
      }
      maxList.push(max);
      minList.push(min);
      avgList.push(avg);
      varList.push(vari);
      stdList.push(std);
      for (let j = 0; j < core2.length; j++) {
        max = Math.max(...core2);
        min = Math.min(...core2);
        avg = core2.reduce((cur, pre) => cur + pre);
        avg = avg / core2.length;
        dev[j] = core2[j] - avg;
        dev[j] = Math.pow(dev[j], 2);
        vari = dev.reduce((cur, pre) => cur + pre);
        vari = vari / core2.length;
        std = Math.sqrt(vari);
      }
      maxList.push(max);
      minList.push(min);
      avgList.push(avg);
      varList.push(vari);
      stdList.push(std);
      for (let j = 0; j < core3.length; j++) {
        max = Math.max(...core3);
        min = Math.min(...core3);
        avg = core3.reduce((cur, pre) => cur + pre);
        avg = avg / core3.length;
        dev[j] = core3[j] - avg;
        dev[j] = Math.pow(dev[j], 2);
        vari = dev.reduce((cur, pre) => cur + pre);
        vari = vari / core3.length;
        std = Math.sqrt(vari);
      }
      maxList.push(max);
      minList.push(min);
      avgList.push(avg);
      varList.push(vari);
      stdList.push(std);
      for (let j = 0; j < core4.length; j++) {
        max = Math.max(...core4);
        min = Math.min(...core4);
        avg = core4.reduce((cur, pre) => cur + pre);
        avg = avg / core4.length;
        dev[j] = core4[j] - avg;
        dev[j] = Math.pow(dev[j], 2);
        vari = dev.reduce((cur, pre) => cur + pre);
        vari = vari / core4.length;
        std = Math.sqrt(vari);
      }
      maxList.push(max);
      minList.push(min);
      avgList.push(avg);
      varList.push(vari);
      stdList.push(std);
      for (let j = 0; j < core5.length; j++) {
        max = Math.max(...core5);
        min = Math.min(...core5);
        avg = core5.reduce((cur, pre) => cur + pre);
        avg = avg / core5.length;
        dev[j] = core5[j] - avg;
        dev[j] = Math.pow(dev[j], 2);
        vari = dev.reduce((cur, pre) => cur + pre);
        vari = vari / core5.length;
        std = Math.sqrt(vari);
      }
      maxList.push(max);
      minList.push(min);
      avgList.push(avg);
      varList.push(vari);
      stdList.push(std);
      res.send([...maxList, ...minList, ...avgList, ...stdList]);
    });
});

app.post("/chart/graph", (req, res, next) => {
  console.log(req.body.data.path);
  if (!req.body.data.path) {
    res.sendStatus(404);
  }

  const input = req.body.data.path.split("\t").map((v) => {
    if (v == " ") return;
    else {
      return +v;
    }
  });

  let arr = input.filter((item) => {
    if (item != 0 || item != NaN) {
      return item;
    }
  });
  let box1 = [];
  let data1 = [];
  for (let j = 0; j < arr.length; j++) {
    data1.push(arr[j]);
    if (data1.length == 5) {
      box1.push(data1);
      data1 = [];
    }
  }
  console.log(box1);
  db.collection("data").insert({ box1 }, (error, result) => {
    console.log("저장완료!");
  });
  res.send("성공");
});
