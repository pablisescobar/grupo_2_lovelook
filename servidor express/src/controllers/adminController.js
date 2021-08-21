const { getProducts } = require("../data/dataBase")

module.exports =  {
    index: (req,res)=>{
        res.render('admin/admin',{
            products:getProducts
        })
    },

    users:(req,res)=>{
        
    }
}