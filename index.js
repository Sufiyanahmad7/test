const express=require (`express`)
const app= express()
const bodyparser=require (`body-parser`)
const port=3000
const mysql= require(`mysql2`)
const cors= require(`cors`)

app.use(express.json()),
app.use(cors('*')),
app.use(bodyparser.urlencoded({extended:true}))

const db=mysql.createPool({
    user:'root',
    password:`root123`,
    connectionLimit:10,
    queueLimit0,
    database:'crudd',
    host:'localhost'
})

app.get('/',(req,res)=>{
    res.send("welcome");
});

app.get(`/showlist`,(req,res)=>{
    const query =`select * from product`
    db.query(query,(err,result)=>{
        res.send(result)
    })
})

app.post(`/addproduct`,(req,res)=>{
    const{pname,category,price}=req.body
    const query=`insert into product(pname,category,price) values=?,?,?`
    db.query(query,[pname,category,price],(err,result,fields)=>{
        res.send(result)

    })
})

app.put(`updateproduct/:pid`,(req,res)=>{
    const{pname,category,price}=req.body
    const {pid}=req.params
    const query=`update product SET pname=?,category=?,price=?`
    db.query(query,[pid][pname,category,price],(err,result,fields)=>{
        if(error){
            res.send(error)
        }else{
            res.send("updated")
        }
    });
});

app.delete(`/deleteproduct/:pid`,(req,res)=>{
    const{pid}=req.params
    const query=`delete from product where pid=?`
    db.query(query,[pid],(error,result)=>{
        if(error){
            res.send(error)
        }else{
            res.send("updated")
        }
    });
});
app.listen(3000,()=>{
    console.log("port listening on 3000");
});
