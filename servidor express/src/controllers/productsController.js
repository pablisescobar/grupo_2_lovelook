const { getProducts, getShops } = require("../data/dataBase");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let categorias = [];
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
});

module.exports = {
    list: (req, res) => {
        res.render('products/listProducts', {
            products: getProducts,
            position:"",
            categorias,
            colors,
            sizes,
            prices,
            toThousand
            
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
            position:"",
            categorias,
            toThousand
        })
    },
    

   /*  offer: (req, res) => {
        let title = "Suma a tu look";

        let productsOffer = getProducts.filter(product => product.discount ? product : null)


        res.render('products/productDetail', {

        })
    } */

}
