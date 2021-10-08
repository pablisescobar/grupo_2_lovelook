module.exports = (sequelize, dataTypes) =>{
    let alias = "product_color";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        colorId:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "product_color",
        timestamps: false
    }
    
    const product_color = sequelize.define(alias, cols, config)
    return product_color
}