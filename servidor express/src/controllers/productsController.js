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
    }
}
