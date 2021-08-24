const { getProducts } = require("../data/dataBase");

module.exports = {
    login: (req, res) => {
        res.render('users/login')
    },
    register:(req,res)=>{
        res.render('users/register')
    },

    perfil:(req,res)=>{
        res.render('users/perfilUser')
    },

    cart:(req,res)=>{
        let productsOffer = getProducts.filter(product => product.discount > 15 ? product : null)
        res.render('users/productCart',{
            products:productsOffer
        })
    },

    favorites:(req,res)=>{
        
    }
}