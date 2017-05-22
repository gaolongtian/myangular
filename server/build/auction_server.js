"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Administrator on 2017/5/6.
 */
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var products = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习慕课网angular', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习慕课网angular', ['硬件设备']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习慕课网angular', ['图书', '婴儿']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网angular', ['电子产品']),
    new Product(5, '第五个商品', 5.99, 4.5, '这是第五个商品，是我在学习慕课网angular', ['电器', '家具']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网angular', ['电子产品'])
];
var comments = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'zhangsan', 3, 'dongxihenhao'),
    new Comment(2, 1, '2017-02-02 22:22:22', 'wangwu', 2, 'dongnhao'),
    new Comment(3, 1, '2017-03-03 23:22:12', 'zlijuan', 4, 'dongnhao'),
    new Comment(4, 1, '2017-04-02 22:21:34', 'ngsan', 2, 'tongxihenhao'),
];
app.get('/api/', function (req, res) { return res.send('Hello Express!'); });
app.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    if (params.title) {
        result = result.filter(function (p) { return p.title.indexOf(params.title) !== -1; });
    }
    if (params.price && result.length > 0) {
        result = result.filter(function (p) { return p.price <= parseInt(params.price); });
    }
    if (params.category && params.category !== "-1" && result.length > 0) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
    }
    res.json(result);
});
app.get('/api/product/:id', function (req, res) { return res.json(products.find(function (product) { return product.id == req.params.id; })); });
app.get('/api/product/:id/comments', function (req, res) { return res.json(comments.filter(function (comment) { return comment.productId == req.params.id; })); });
var server = app.listen(8000, 'localhost', function () { return console.log('地址是'); });
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send("这个消息是服务器主动推送的");
    websocket.on("message", function (message) { return console.log(message); });
});
