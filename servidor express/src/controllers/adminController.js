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
            code,
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
            code,
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
        res.redirect('/admin/products')


    },

    editProduct: (req, res) => {
        res.render('admin/editProduct', {
            position: ""
        })
    },

    updateProduct: (req, res) => {

    }


}
