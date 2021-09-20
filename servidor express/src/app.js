const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session')

/* Middleware */
app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());  /* lineas para trabajar con POST, -tiene que estar antes de las rutas */
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: "loveLookModa",
    resave: false,
    saveUninitialized: true
}))

/* VIEWS */
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

/* ENRUTADORES */
let homeRouter = require('./routes/home')
let adminRouter = require('./routes/admin');
let infoRouter = require('./routes/info');
let productsRouter = require('./routes/products');
let userRouter = require('./routes/user');


/* RUTAS */

app.use('/',homeRouter);
app.use('/admin',adminRouter);
app.use('/info',infoRouter);
app.use('/products',productsRouter);
app.use('/user',userRouter);

/* -------ERROR 404------------ */
let {getProducts} = require ('./data/dataBase')
app.use((req,res,next)=>{
let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})
    res.status(404).render('status404',{
categorias,
position:"position:relative"
    })
})

/* ---------------------------- */


/* SERVER*/
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
