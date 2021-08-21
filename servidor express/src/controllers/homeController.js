let { getProducts } = require('../data/dataBase')

module.exports =  {
    index: (req,res)=>{
        let title = "Productos Destacados"
        res.render('products/home', {
            products: getProducts, 
            title: title
        })
    }
}