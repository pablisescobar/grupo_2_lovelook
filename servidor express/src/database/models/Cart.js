module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        totalPrice: {
            type: DataTypes.INTEGER(11)
        },
        /* userId: {
            type: DataTypes.INTEGER(11)
        },
        productId: {
            type: DataTypes.INTEGER(11)
        } */
    }
    let Cart = sequelize.define("Cart", cols, {
        tableName: "shopping_cart",
        timestamps: false
    })

    return Cart
}