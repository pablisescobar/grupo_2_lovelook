const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
let methodOverride = require('method-override')

/* Middleware */
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())  /* lineas para trabajar con POST, -tiene que estar antes de las rutas */
app.use(methodOverride('_method'))

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


/* SERVER*/
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
