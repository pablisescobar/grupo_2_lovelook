/* const { getProducts, writeProductsJSON, getCategory, getColors } = require("../data/dataBase") */
const db = require('../database/models')
const { Op } = require('sequelize')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require('express-validator')


/* FUNCIÓN PARA CAPITALIZE - MAYÚSCULA EN LA PRIMER LETRA */
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = {
    listProductAdmin: (req, res) => {
        db.Product.findAll({
            include: [{ association: "category" },
            { association: "season" },
            { association: "images" },
            { association: "colors" },
            { association: "sizes" }
            ]
        })
            .then(products => {
                /* console.log(products);
                res.send(products) */
                res.render('admin/listProductAdmin', {
                    products,
                    position: "",
                    toThousand,
                    session: req.session
                })
            })
            .catch(error => console.log(error))
    },

    addProductAdmin: (req, res) => {
        let categoriesDb = db.Category.findAll()
        let seasonsDb = db.Season.findAll()
        let sizesDb = db.Size.findAll()
        let colorsDb = db.Color.findAll()
        Promise.all([categoriesDb, seasonsDb, sizesDb, colorsDb])
            .then(([categories, seasons, sizes, colors]) => {
                res.render('admin/addProducts', {
                    position: "",
                    categories,
                    colors,
                    seasons,
                    sizes,
                    capitalize,
                    session: req.session
                })
            }).catch(error => console.log(error))
    },

    productStore: (req, res) => {

        let errors = validationResult(req)
        if (req.fileValidatorError) {
            let image = {
              param: "image",
              msg: req.fileValidatorError,
            };
            errors.push(image);
          }
        if (errors.isEmpty()) {
            let arrayImages = [];
            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            } else {
                arrayImages.push("default.png")
            }


            let {
                name,
                description,
                price,
                amount,
                category,
                color,
                size,
                season,
                discount
            } = req.body

            try {
                db.Product.create({
                    name,
                    description,
                    price,
                    amount,
                    discount,
                    categoryId: category,
                    seasonId: season
                })
                    .then(product => {
                        if (arrayImages.length > 0) {
                           let images = arrayImages.map(image => {
                                return {
                                    filename: image,
                                    productId: product.id
                                }
                            })
                            db.Image.bulkCreate(images)
                        }else{
                            arrayImages.push("default.png")
                        }
                        
                        db.product_color.create({
                            productId: product.id,
                            colorId: color
                        })
                        .then(()=>{
                                        db.product_size.create({
                                            productId: product.id,
                                            sizeId: size
                                        })
                                        .then(()=>res.redirect(`/admin/products#{product.id}`))
                                    })
                                    
                                })
                    
            } catch (err) {
                res.send(err)
             }


        } else {
            let categoriesDb = db.Category.findAll()
            let seasonsDb = db.Season.findAll()
            let sizesDb = db.Size.findAll()
            let colorsDb = db.Color.findAll()
            Promise.all([categoriesDb, seasonsDb, sizesDb, colorsDb])
                .then(([categories, seasons, sizes, colors]) => {
                    res.render('admin/addProducts', {
                        position: "",
                        categories,
                        colors,
                        seasons,
                        sizes,
                        capitalize,
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body,
                    })
                })
                .catch(error => console.log(error))
        }



    },

    searchAdmin: (req, res) => {
        db.Product.findAll({
            where: {
                [Op.like]: `%${req.query.keys}%`
            }
        })
            .then(result => {
                res.render('admin/searchResultAdmin', {
                    result,
                    toThousand,
                    session: req.session
                })
            })
    },

    editProduct: (req, res) => {
        let categoriesDb = db.Category.findAll()
        let seasonsDb = db.Season.findAll()
        let sizesDb = db.Size.findAll()
        let colorsDb = db.Color.findAll()
        let productDb = db.Product.findByPk(+req.params.id)
        Promise.all([categoriesDb, seasonsDb, sizesDb, colorsDb, productDb])
            .then(([categories, seasons, sizes, colors, product]) => {
                res.render('admin/editProduct', {
                    product,
                    categories,
                    colors,
                    sizes,
                    seasons,
                    capitalize,
                    session: req.session
                })
            })
    },

    updateProduct: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            let {
                name,
                description,
                price,
                amount,
                imageId,
                categoryId,
                colorId,
                seasonId
            } = req.body

            db.Product.update({
                name,
                description,
                price,
                amount,
                imageId,
                categoryId,
                colorId,
                seasonId
            }, {
                where: {
                    id: +req.params.id
                }
            })
                .then(product => {
                    res.redirect(`/admin/products#${product.id}`)
                })
        } else {
            let categoriesDb = db.Category.findAll()
            let seasonsDb = db.Season.findAll()
            let sizesDb = db.Size.findAll()
            let colorsDb = db.Color.findAll()
            let productDb = db.Product.findByPk(+req.params.id)
            Promise.all([categoriesDb, seasonsDb, sizesDb, colorsDb, productDb])
                .then(([categories, seasons, sizes, colors, product]) => {
                    res.render('admin/editProduct', {
                        product,
                        categories,
                        colors,
                        sizes,
                        seasons,
                        capitalize,
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
        }


    },

    eliminarProducto: (req, res) => {
        db.Product.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(() => res.redirect('/admin/products'))
            .catch(error => console.log(error))
    }

}