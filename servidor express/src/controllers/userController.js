const { getProducts } = require("../data/dataBase");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})
module.exports = {
    perfil:(req,res)=>{
        res.render('users/perfilUser',{
            position:"",
            categorias
        })
    },

    cart:(req,res)=>{
        let productsOffer = getProducts.filter(product => product.discount > 15 ? product : null)
        res.render('users/productCart',{
            products:productsOffer,
            position:"",
            toThousand,
            categorias

        })
    },

 
}