module.exports = (sequelize, DataTypes) => {
    let alias = "Image";
    let cols = {
        id: {
            type:DataTypes.INTEGER(11),
            autoIncrement: true,
            primarykey: true
        },
        filename: {
            type:DataTypes.STRING(100),
            allowNull:true
        },
        productId:{
            type:DataTypes.INTEGER(11)
        }

    }
    let config = {
        tableName:  "images",
        timestamps:true
    }

    const Image = sequelize.define(alias, cols, config);
    Image.associate=models=>{
        Image.belongsTo(models.Product,{
            as:"product",
            foreignKey:"productId"
        })
    }
    return Image;
}