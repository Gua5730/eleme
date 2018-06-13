//引入
const express = require("express");
// 创建一个app
const app = express();
const data = require("./data.json");

// 前端请求localhost:8888/data/goods,  返回goods
app.get("/data/goods",function (req,res) {
    res.send({
        status: 1,
        msg: "goods OK",
        goods: data.goods
    })
})
app.get("/data/ratings",function (req,res) {
    res.send({
        status: 1,
        msg: "goods OK",
        ratings: data.ratings
    })
})
app.get("/data/seller",function (req,res) {
    res.send({
        status: 1,
        msg: "goods OK",
        sellers: data.seller
    })
})

app.listen(8888);