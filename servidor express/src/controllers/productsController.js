const db = require('../database/models')
const { getProducts, getShops } = require("../data/dataBase");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/* let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})

let colors = [];
getProducts.forEach(product => {
    if(!colors.includes(product.color)){
        colors.push(product.color)
    }  
});

let sizes = [];
getProducts.forEach(product => {
    if(!sizes.includes(product.size)){
        sizes.push(product.size)
    }  
});

let prices = [];
getProducts.forEach(product => {
    if(!prices.includes(product.price)){
        prices.push(product.price)
    }  
}); */

module.exports = {
    list: (req, res) => {
        db.Product.findAll({
            include: [
            { association: "category" },
            { association: "images" },
            { association: "colors" },
            { association: "season" },
            { association: "sizes" },
            ]
        })
        .then((product) => {
            db.Color.findAll()
            .then(colors =>{
                db.Size.findAll()
                .then(sizes =>{
                    res.render('products/listProducts', {
                    product,
                    colors,
                    sizes,
                    position:"",
                    toThousand,
                    display:"display:grid;",
                    session: req.session
                })
                })
            })
        })
    },
    
    detail: (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: "category" },
            { association: "images" },
            { association: "colors" },
            { association: "season" },
            { association: "sizes" },
            ]
        })
        .then((product) => {
            db.Product.findAll({
                where: {
                    categoryId : product.categoryId
                },
                limit: 5
                ,
                include: [{ association: "category" },
                { association: "images" },
                { association: "colors" },
                { association: "season" },
                { association: "sizes" },
                ]
            })
            .then(products =>{
                /* res.send(product.colors.id) */
                res.render('products/productDetail', {
                product,
                products,
                titleSlider: 'Productos Relacionados',
                position:"",
                toThousand,
                session: req.session
            }) 
            })
            
           
            
        }).catch(err => {
            console.log(err);
        })


        /* let productoId = getProducts.find(productX => productX.id == +req.params.id)
        let title = "Suma a tu look";
        let productsFilter = getProducts.filter(product=>product.discount >= 10)
        
        res.render('products/productDetail', {
            products:productsFilter ,
            product: productoId,
            title: title,
            position:"",
            categorias,
            toThousand,
            session: req.session
        }) */
    },
    category:(req,res)=>{

        db.Category.findOne({
            where: {
                name: req.params.category
            },
            include: [{
                association: 'products',
                include: [{ association: "category" },
                { association: "images" },
                { association: "colors" },
                { association: "season" },
                { association: "sizes" },
                ]
            }]
        })
        .then(category =>{
            db.Color.findAll()
            .then(colors =>{
                db.Size.findAll()
                .then(sizes =>{
                    db.Product.findAll({
                        include: [
                            { association: "category" },
                            { association: "images" },
                            { association: "colors" },
                            { association: "season" },
                            { association: "sizes" },
                        ]
                    })
                    .then(product =>{
                        res.render('products/productCategory',{
                            category: category.products,
                            display:"display:none;",
                            position:"",
                            colors,
                            toThousand,
                            sizes,
                            product,
                            session: req.session
                        })
                    })
                    
                })
                
            })
            
        })

        /* function categories(category){
            let arrayCategories = []
            getProducts.forEach(product=>{
                if(product.category.toLowerCase() === String(category).toLowerCase()){
                    if(!arrayCategories.includes(product)){
                        arrayCategories.push(product)
                    }
                }
            })
            return arrayCategories
        }
         let categoriesOfList = categories(req.params.category)

         res.render('products/listProducts',{
             products:categoriesOfList,
             display:"display:none;",
             position:"",
             categorias,
             toThousand,
             colors,
            sizes,
            prices,
            session: req.session
         }) */
    }
}
