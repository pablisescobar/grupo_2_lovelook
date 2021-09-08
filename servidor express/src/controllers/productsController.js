const { getProducts, getShops } = require("../data/dataBase");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})

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

module.exports = {
    list: (req, res) => {
        res.render('products/listProducts', {
            products: getProducts,
            position:"",
            categorias,
            colors,
            sizes,
            prices,
            toThousand,
            display:"display:grid;"
            
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
             toThousand,
             colors,
            sizes,
            prices
         })
    }
}
