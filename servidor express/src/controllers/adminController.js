const { getProducts } = require("../data/dataBase")

module.exports =  {
    listProductAdmin:(req,res)=>{

        res.render('admin/listProductAdmin',{
        products:getProducts,
        position:""
    })
},
    
    addProductAdmin:(req,res)=>{
        res.render('admin/addProducts',{
            position:""
        })
    },
    editProduct:(req,res)=>{
        res.render('admin/editProduct',{
        position:""
    })
    }
}