const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
            .then((products) => {
                db.Color.findAll()
                    .then(colors => {
                        db.Size.findAll()
                            .then(sizes => {
                                res.render('products/listProducts', {
                                    products,
                                    colors,
                                    sizes,
                                    position: "",
                                    toThousand,
                                    display: "display:grid;",
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
                        categoryId: product.categoryId
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
                    .then(products => {
                        res.render('products/productDetail', {
                            product,
                            products,
                            titleSlider: 'Productos Relacionados',
                            position: "",
                            toThousand,
                            session: req.session
                        })
                    })
            }).catch(err => {
                console.log(err);
            })
    },
    category: (req, res) => {

        db.Category.findOne({
            where: {
                name: req.params.category
            },
            include: [{
                association: 'products',
                include: [
                    { association: "category" },
                    { association: "images" },
                    { association: "colors" },
                    { association: "season" },
                    { association: "sizes" },
                ]
            }]
        })
            .then(category => {
                db.Color.findAll()
                    .then(colors => {
                        db.Size.findAll()
                            .then(sizes => {
                                db.Product.findAll({
                                    include: [
                                        { association: "category" },
                                        { association: "images" },
                                        { association: "colors" },
                                        { association: "season" },
                                        { association: "sizes" },
                                    ]
                                })
                                    .then(product => {
                                        res.render('products/productCategory', {
                                            category: category.products,
                                            display: "display:grid;",
                                            position: "",
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
    },
    accessories: (req, res) => {
        
        try {
            let productsPromise = db.Product.findAll({
                include: [
                    { association: "category" },
                    { association: "images" },
                    { association: "colors" },
                    { association: "season" },
                    { association: "sizes" },
                ]
            })
            let categoryPromise = db.Category.findOne({
                where: {
                    name: "accesorios"
                }
            })
            let categoriesPromise = db.Category.findAll()
            let colorsPromise = db.Color.findAll()
            let sizesPromise = db.Size.findAll()

            
            let arrProducts = [];
            Promise.all([productsPromise, categoryPromise, categoriesPromise,colorsPromise,sizesPromise])

                .then(([products, category, categories,colors,sizes]) => {

                    console.log([products, category, categories]);
                    products.forEach(product => {
                        if (product.categoryId == category.id) {
                            arrProducts.push(product)
                        }
                    })
                    res.render('products/productAccessories', {
                       /*  product:arrProducts, */
                        categories,
                        colors,
                        sizes,
                        position: "",
                        display: "display:grid;",
                        toThousand,
                        products: arrProducts,
                        session: req.session
                    })
                })

        } catch (err) {
            console.log(err);
        }
    }


}
