const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

/* Middleware */
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())  /* lineas para trabajar con POST, -tiene que estar antes de las rutas */

/* VIEWS */
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

/* ENRUTADORES */
let homeRouter = require('./routes/home')
let adminRouter = require('./routes/admin');
let contactRouter = require('./routes/contact');
let favoritesRouter = require('./routes/favorites');
let helpRouter = require('./routes/help');
let listProductsRouter = require('./routes/listProducts')
let loginRouter = require('./routes/login')
let productCartRouter = require('./routes/productCart')
let productDetailRouter = require('./routes/productDetail')
let registerRouter = require('./routes/register');
let weRouter = require ('./routes/we')

/* RUTAS */

app.use('/',homeRouter);
app.use('/admin',adminRouter);
app.use('/contact',contactRouter);
app.use('/favorites',favoritesRouter);
app.use('/help',helpRouter);
app.use('/list',listProductsRouter);
app.use('/login',loginRouter);
app.use('/cart',productCartRouter);
app.use('/detail',productDetailRouter);
app.use('/register',registerRouter);
app.use('/we',weRouter);



/* SERVER*/
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
