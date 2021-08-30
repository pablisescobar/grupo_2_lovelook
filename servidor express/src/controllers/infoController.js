let {getProducts} = require ('../data/dataBase')
let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})
module.exports =  {
    contact: (req,res)=>{
        res.render('info/contact',{
            position:"",
            categorias:categorias
        })
    },
    help: (req,res)=>{
        res.render('info/help',{
            position:"",
            categorias:categorias
        })
    },
    we: (req,res)=>{
        res.render('info/we',{
            position:"position:relative",
            categorias:categorias
        })
    }
}