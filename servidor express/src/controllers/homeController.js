let { getProducts, getImgCarousel } = require('../data/dataBase')
let path = require('path')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})
module.exports = {
    index: (req, res) => {
        let title = "Productos Destacados";
        let products = getProducts.filter(product => product.discount >= 15)
        res.render('products/home', {
            products: products,
            title: title,
            position: "",
            carousel: getImgCarousel,
            categorias,
            toThousand
        })
    },
    afip: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/img/afip.png'))

    },
    search: (req, res) => {
        let result = []

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
            categorias
        })
    }
}