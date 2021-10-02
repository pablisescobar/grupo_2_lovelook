let db = require('../database/models')
module.exports = (req, res, next) => {
    db.Category.findALL({
        include: [{
            association: ""
        }]
        .then(categories => {
            res.locals.categories = categories
            next()
        })
    })
}