let { getProducts } = require('../data/dataBase')

module.exports =  {
    index: (req,res)=>{
        res.render('productDetail',{
            products:getProducts
        })
    }
}

