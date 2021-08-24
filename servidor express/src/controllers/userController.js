const { getProducts } = require("../data/dataBase");

module.exports = {
    login: (req, res) => {
        res.render('users/login',{
            position:"position:relative;"
        })
    },
    register:(req,res)=>{
        res.render('users/register',{
            position:"position:relative;"
        })
    },

    perfil:(req,res)=>{
        res.render('users/perfilUser',{
            position:""
        })
    },

    cart:(req,res)=>{
        let productsOffer = getProducts.filter(product => product.discount > 15 ? product : null)
        res.render('users/productCart',{
            products:productsOffer,
            position:""
        })
    },

    favorites:(req,res)=>{
        
    }
}