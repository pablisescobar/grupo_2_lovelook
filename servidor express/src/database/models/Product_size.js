module.exports = (sequelize, dataTypes) =>{
    let alias = "product_size";
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
        sizeId:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "product_size",
        timestamps: false
    }
    
    const product_size = sequelize.define(alias, cols, config)
    return product_size
}