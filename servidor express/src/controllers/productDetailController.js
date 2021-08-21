let { getProducts } = require('../data/dataBase')

module.exports =  {
    index: (req,res)=>{
        let title = "Suma a tu look";
        res.render('productDetail',{
            products:getProducts,
            title:title
        })
    }
}

