const { getProducts } = require("../data/dataBase")

module.exports =  {
    listProductAdmin:(req,res)=>{

        res.render('admin/listProductAdmin',{
        products:getProducts
    })
},
    
    addProductAdmin:(req,res)=>{
        res.render('admin/addProducts',{
        })
    },
    editProduct:(req,res)=>{
        res.render('admin/editProduct')
    }
}