const { getProducts, getShops } = require("../data/dataBase");

module.exports = {
    list: (req, res) => {
        res.render('products/listProducts', {
            products: getProducts,
            position:""
        })
    },

    detail: (req, res) => {
        let productoId = getProducts.find(productX => productX.id == +req.params.id)
        let title = "Suma a tu look";
        let productsFilter = getProducts.filter(product=>product.discount >= 10)
        
        res.render('products/productDetail', {
            products:productsFilter ,
            product: productoId,
            title: title,
            position:""
        })
    },

   /*  offer: (req, res) => {
        let title = "Suma a tu look";

        let productsOffer = getProducts.filter(product => product.discount ? product : null)


        res.render('products/productDetail', {

        })
    } */
}
