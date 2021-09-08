const { getProducts, writeProductsJSON, getCategory, getColors } = require("../data/dataBase")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require('express-validator')
let categories = []
let colors = []
let sizes = []
let seasons = []


/* FUNCIÓN PARA CAPITALIZE - MAYÚSCULA EN LA PRIMER LETRA */
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

getCategory.forEach(categoryName => {
    if (!categories.includes(categoryName.category.toLowerCase())) {
        categories.push(categoryName.category.toLowerCase())
    }
})
getProducts.forEach(product => {
    if (!colors.includes(product.color.toLowerCase())) {
        colors.push(product.color.toLowerCase())
    }
})

getProducts.forEach(product => {
    if (!sizes.includes(product.size.toLowerCase())) {
        sizes.push(product.size.toLowerCase())
    }
})

getProducts.forEach(product => {
    if (!seasons.includes(product.season.toLowerCase())) {
        seasons.push(product.season.toLowerCase())
    }
})

module.exports = {
    loginAdmin: (req, res) => {
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
            colors,
            capitalize
        })
    },

    productStore: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

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

            let setImages = []
            if (req.files) {
                req.files.forEach(image => {
                    setImages.push(image.filename)
                })
            }
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
                image: setImages.length > 0 ? setImages : ["default.png"]
            }

            getProducts.push(newProduct)
            writeProductsJSON(getProducts)
            res.redirect(`/admin/products#${newProduct.id}`)

        } else {
            /* res.send(errors) */
            res.render('admin/addProducts', {
                position: "",
                categories,
                colors,
                capitalize,
                errors: errors.mapped(),
                old: req.body
            })
        }



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
            product,
            categories,
            colors,
            sizes,
            seasons
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
        res.redirect('/admin/products')
    },

    eliminarProducto: (req, res) => {
        getProducts.forEach(product => {
            if (product.id === +req.params.id) {
                let productoAEliminar = getProducts.indexOf(product)
                getProducts.splice(productoAEliminar, 1)
            }
        })
        writeProductsJSON(getProducts)
        res.redirect('/admin/products')
    }

}
