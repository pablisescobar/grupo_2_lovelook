const { getProducts, getShops } = require("../data/dataBase");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})

<<<<<<< HEAD
let colors = [];
getProducts.forEach(product => {
    if(!colors.includes(product.color)){
        colors.push(product.color)
    }  
});

let sizes = [];
getProducts.forEach(product => {
    if(!sizes.includes(product.size)){
        sizes.push(product.size)
    }  
});

let prices = [];
getProducts.forEach(product => {
    if(!prices.includes(product.price)){
        prices.push(product.price)
    }  
});

=======
>>>>>>> 0c20f7a365e521561806fc4c12757a227cea63f5
module.exports = {
    list: (req, res) => {
        res.render('products/listProducts', {
            products: getProducts,
            position:"",
            categorias,
<<<<<<< HEAD
            colors,
            sizes,
            prices,
            toThousand
=======
            toThousand,
            display:"display:grid;"
>>>>>>> 0c20f7a365e521561806fc4c12757a227cea63f5
            
        })
    },
    
    detail: (req, res) => {
        let productoId = getProducts.find(productX => productX.id == +req.params.id)
        let title = "Suma a tu look";
        let productsFilter = getProducts.filter(product=>product.discount >= 10)
        
        res.render('products/productDetail', {
            products:productsFilter ,
            product: productoId,
            title: title,
            position:"",
            categorias,
            toThousand
        })
    },
    category:(req,res)=>{
        function categories(category){
            let arrayCategories = []
            getProducts.forEach(product=>{
                if(product.category.toLowerCase() === String(category).toLowerCase()){
                    if(!arrayCategories.includes(product)){
                        arrayCategories.push(product)
                    }
                }
            })
            return arrayCategories
        }
         let categoriesOfList = categories(req.params.category)

         res.render('products/listProducts',{
             products:categoriesOfList,
             display:"display:none;",
             position:"",
             categorias,
             toThousand
         })
    }
}
