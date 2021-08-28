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

    editProduct: (req, res) => {
        res.render('admin/editProduct', {
            position: ""
        })
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

    updateProduct: (req, res) => {

    }


}
