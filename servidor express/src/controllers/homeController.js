let { getProducts,getImgCarousel } = require('../data/dataBase')
let path=require('path')

module.exports =  {
    index: (req,res)=>{
        let title = "Productos Destacados";
        let products = getProducts.filter(product=>product.discount >= 15)
        res.render('products/home', {
            products: products, 
            title: title,
            position:"",
            carousel:getImgCarousel
        })
    },
    afip:(req,res)=>{
        res.sendFile(path.join(__dirname,'../../public/img/afip.png'))
        
    }
}