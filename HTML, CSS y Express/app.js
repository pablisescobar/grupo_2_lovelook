const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

/* Middleword */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.get("/register", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views/register.html")) 
})
app.get("/Carrito",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productCart.html"))
})
app.get("/Detalle de producto",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/productDetail.html"))
})
app.get("/favoritos",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/favoritos.html"))
})
app.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/contacto.html"))
})
app.get("/nosotros",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/nosotros.html"))
})
app.get("/ayuda",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/ayuda.html"))
})
app.get("/Lista_de_productos",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/listProduct.html"))
})
/* Server */
app.listen(port, () => {
    console.log(`localhost:${port}`)
})
