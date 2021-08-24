let { getProducts } = require('../data/dataBase')

module.exports =  {
    index: (req,res)=>{
        let title = "Productos Destacados";
        let products = getProducts.filter(product=>product.discount >= 15)
        res.render('products/home', {
            products: products, 
            title: title,
            position:""
        })
    }
}