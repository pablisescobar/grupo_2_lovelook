const { getProducts, writeProductsJSON } = require("../data/dataBase")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let categories = []
let colors = []
let sizes = []

getProducts.forEach(product => {
    if (!categories.includes(product.category)) {
        categories.push(product.category)
    }
})
getProducts.forEach(product => {
    if (!colors.includes(product.color)) {
        colors.push(product.color)
    }
})

getProducts.forEach(product => {
    if (!sizes.includes(product.size)) {
        sizes.push(product.size)
    }
})

module.exports = {
    loginAdmin:(req,res)=>{
        res.render('admin/loginAdmin')
    },
    listProductAdmin: (req, res) => {
        res.render('admin/listProductAdmin', {
            products: getProducts,
            position: "",
            toThousand

        })
    },

    addProductAdmin: (req, res) => {
        res.render('admin/addProducts', {
            position: "",
            categories,
            sizes,
            colors
        })
    },

    productStore: (req, res) => {
        let lastId = 1;

        getProducts.forEach(product => {
            if (product.id > lastId) {
                lastId = product.id
            }
        })

        let {
            name,
            description,
            season,
            category,
            discount,
            price,
            color,
            size,
            stock
        } = req.body;

        let newProduct = {
            id: lastId + 1,
            name,
            description,
            season,
            category,
            discount,
            price,
            color,
            size,
            stock,
            image: req.file ? [req.file.filename] : "defect.jpg"
        }

        getProducts.push(newProduct)
        writeProductsJSON(getProducts)
        res.redirect(`/admin/products#${newProduct.id}`)


    },

    searchAdmin: (req, res) => {
        let result = []

        getProducts.forEach(product => {

            if (String(product.name).toLowerCase().includes(req.query.keys.toLowerCase())) {
                result.push(product)
            } else if (String(product.season).toLowerCase().includes(req.query.keys.toLowerCase())) {
                result.push(product)
            } else if (String(product.category).toLowerCase().includes(req.query.keys.toLowerCase())) {
                result.push(product)
            } else if (String(product.description).toLowerCase().includes(req.query.keys.toLowerCase())) {
                result.push(product)
            }
        })

        res.render('admin/searchResultAdmin', {
            result,
            toThousand
        })
    },

    editProduct: (req, res) => {

        let product = getProducts.find(product => product.id === +req.params.id);
        res.render('admin/editProduct', {
            product
        })
    },

    updateProduct: (req, res) => {
        const {
            name,
            price,
            color,
            discount,
            category,
            description,
            season,
            size,
            stock,
             } = req.body

        getProducts.forEach(product => {
            if (product.id === +req.params.id) {
                product.id = product.id,
                    product.name = name,
                    product.price = price,
                    product.color = color,
                    product.discount = discount,
                    product.category = category,
                    product.description = description,
                    product.season = season,
                    product.size = size,
                    product.stock = stock,
                    product.image = req.file ? [req.file.filename] : product.image
            }
        })

        writeProductsJSON(getProducts)

        res.send(`Has editado el producto ${name}`)
    },
    
     eliminarProducto:(req, res) => {
        getProducts.forEach(product => {
            if(product.id === +req.params.id){
                let productoAEliminar = getProducts.indexOf(product)
                getProducts.splice(productoAEliminar, 1)
            }
        }) 
        writeProductsJSON(getProducts)
         res.redirect('/admin/products')
     }

}
