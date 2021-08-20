const { getProducts,getShops } = require("../data/dataBase");

module.exports = {
    index: (req, res) => {
        res.render('listProducts',{
            products:getProducts
        })
    },

    filterSize: (req, res) => {
        let paramsSize = req.params.size;
        let arrayProductsSize = []

        getProducts.forEach(product => {
            if (product.size.toLowerCase() == paramsSize.toLowerCase()) {
                arrayProductsSize.push(product)
            }
        });
        res.render('listProducts', {
            title: `Productos talla ${paramsSize}`,
            arrayProductsSize,
        })
    },

    filterPrice: (req, res) => {
        let paramsPrice = req.params.price;
        let arrayProductsPrice = [];

        getProducts.forEach(product => {
            if (product.price.toLowerCase() == +paramsPrice) {
                arrayProductsPrice.push(product)
            }
        })
        res.render('listProduct', {
            title: `Productos hasta $${paramsPrice}`,
            arrayProductsPrice
        })
    },

    filterColor: (req, res) => {
        let paramsColor = req.params.color;

        let arrayProductsColor = []
        getProducts.forEach(product => {
            if (product.color == paramsColor.toLowerCase()) {
                arrayProductsColor.push(product)
             }
        })
        res.render('listProduct',{
            title:`Productos de color: ${paramsColor.toUpperCase()}`,
            arrayProductsColor
        })
    },

    filterOption: (req, res) => {
        let paramsPrice = req.params.price;
        let paramsSize = req.params.size;
        let paramsColor = req.params.color;

        let arrayFiltradoGeneral = []
        getProducts.forEach(product => {
            if (+product.price == +paramsPrice || product.size == paramsSize.toLowerCase() || product.color == paramsColor.toLowerCase()) {
                arrayFiltradoGeneral.push(product)
            }
        })
        res.render('listProduct', {
            title: `Productos filtrados`,
            arrayFiltradoGeneral
        })
    },

}