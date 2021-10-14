let { getProducts, getImgCarousel } = require('../data/dataBase')
let path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})



module.exports = {
    index: (req, res) => {
        db.Product.findAll({
            where: {
                discount: {
                   [Op.gte] : 15 
                }  
            },
            include: [{ association: "category" },
            { association: "images" },
            { association: "colors" },
            { association: "season" },
            { association: "sizes" },
            ]
        })
        .then(products =>{
            res.render('products/home', {
            products,
            title: 'Nuestras Ofertas',
            position: "",
            carousel: getImgCarousel,
            categorias,
            toThousand,
            session: req.session
        }) 
        })
        
        /* let title = "Productos Destacados";
        let products = getProducts.filter(product => product.discount >= 15)
        */
    },
    afip: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/img/afip.png'))

    },
    search: (req, res) => {
        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.query.keys}%`
                }
            },  
            where: {
                description: {
                    [Op.like]: `%${req.query.keys}%`
                }
            },  
            include: [
                { association: "category" },
                { association: "images" },
                { association: "colors" },
                { association: "season" },
                { association: "sizes" },
            ]
        })
        .then(result =>{
            db.Product.findAll({
                include: [
                    { association: "category" },
                    { association: "images" },
                    { association: "colors" },
                    { association: "season" },
                    { association: "sizes" },
                ]
            })
            .then(products =>{
                db.Category.findAll({
                    where: {
                        name :{
                            [Op.like]: `%${req.query.keys}%`
                        }
                    },
                    include: [{
                        association: 'products'
                    }]
                })
                .then(categoryResult =>{
                    res.render('products/resultOfSearch', {
                    result: products,
                    result,
                    categoryResult,
                    toThousand,
                    search: req.query.keys,
                    position: "",
                    products,
                    session: req.session
                })
            })
                
            })
           
        })

        /* let result = []

        let products = getProducts.filter(product => product.discount >= 15)
        getProducts.forEach(product => {
           
                if (String(product.name).toLowerCase().includes(req.query.keys.toLowerCase())) {
                    result.push(product)
                } else if (String(product.season).toLowerCase().includes(req.query.keys.toLowerCase())) {
                    result.push(product)
                } else if (String(product.category).toLowerCase().includes(req.query.keys.toLowerCase())) {
                    result.push(product)
                } else if (String(product.description).toLowerCase().includes(req.query.keys.toLowerCase())) {
                    result.push(product)
                }
        })
        res.render('products/resultOfSearch', {
            result,
            toThousand,
            search: req.query.keys,
            position: "",
            products,
            categorias,
            session: req.session
        }) */
    }
}
