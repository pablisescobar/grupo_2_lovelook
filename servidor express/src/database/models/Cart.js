/* module.exports = (sequelize, dataTypes) => {
    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        totalPrice: {
            type: dataTypes.INTEGER(11)
        },
        userId: {
            type: dataTypes.INTEGER(11)
        },
        productId: {
            type: dataTypes.INTEGER(11)
        }
    }
    let Cart = sequelize.define("Cart", cols, {
        tableName: "shopping_cart",
        timestamps: false
    })

    return Cart
} */