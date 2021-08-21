const { getProducts } = require("../data/dataBase")

module.exports =  {
    index: (req,res)=>{
        res.render('users/productCart',{
            products:getProducts
        })
    }
}
