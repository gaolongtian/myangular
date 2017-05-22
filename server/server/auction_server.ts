/**
 * Created by Administrator on 2017/5/6.
 */
import  * as express from 'express';
import {Server} from 'ws';
const app=express();
export class Product {
    constructor(public id: number,
                public title: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {
    }
}
export class Comment {
    constructor(public id: number,
                public productId: number,
                public  timestamp: string,
                public user: string,
                public rating: number,
                public content: string) {
    }
}
const products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习慕课网angular', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习慕课网angular', ['硬件设备']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习慕课网angular', ['图书', '婴儿']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网angular', ['电子产品']),
    new Product(5, '第五个商品', 5.99, 4.5, '这是第五个商品，是我在学习慕课网angular', ['电器', '家具']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网angular', ['电子产品'])
];
const comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'zhangsan', 3, 'dongxihenhao'),
    new Comment(2, 1, '2017-02-02 22:22:22', 'wangwu', 2, 'dongnhao'),
    new Comment(3, 1, '2017-03-03 23:22:12', 'zlijuan', 4, 'dongnhao'),
    new Comment(4, 1, '2017-04-02 22:21:34', 'ngsan', 2, 'tongxihenhao'),
]
app.get('/api/',(req,res)=>res.send('Hello Express!'));
app.get('/api/products', (req, res) => {
    let result = products;
    let params = req.query;

    if(params.title){
        result = result.filter((p) => p.title.indexOf(params.title) !== -1);
    }

    if(params.price && result.length > 0){
        result = result.filter((p) => p.price <= parseInt(params.price));
    }

    if(params.category && params.category !== "-1" && result.length > 0){
        result = result.filter((p) => p.categories.indexOf(params.category) !== -1);
    }

    res.json(result);
});
app.get('/api/product/:id',(req,res)=>res.json(products.find((product)=>product.id==req.params.id)));
app.get('/api/product/:id/comments',(req,res)=>res.json(comments.filter((comment: Comment) => comment.productId == req.params.id)));
const server=app.listen(8000,'localhost',()=>console.log('地址是'));
const wsServer=new Server({port:8085});
wsServer.on("connection",websocket=>{
    websocket.send("这个消息是服务器主动推送的");
    websocket.on("message",message=>console.log(message));
});