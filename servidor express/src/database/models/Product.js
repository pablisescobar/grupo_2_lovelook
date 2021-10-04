module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
         type: dataTypes.INTEGER(11),
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        description: {
            type: dataTypes.VARCHAR(100),
        },
        price: {
            type: dataTypes.DECIMAL(1, 3),
            allowNull: false
        },
        amount: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        imageId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        seasonId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as:"category",
            foreignKey: "categoryId"
        })
        Product.hasMany(models.Image,{
            as:"images",
            foreignKey:"imageId"
        })
        Product.belongsTo(models.Season,{
            as:"season",
            foreignKey:"seasonId"
        })
        Product.belongsToMany(models.User,{
            as:"users",
            through:"shopping_cart",
            foreignKey:"productId",
            otherKey:"userId"
        }),
        Product.belongsToMany(models.User,{
            as:"users",
            through:"sales",
            foreignKey:"productId",
            otherKey:"userId"
        }),
        Product.belongsToMany(models.Color,{
            as:"colors",
            through:"product_color",
            foreignKey:"productId",
            otherKey:"colorId"
        }),
        Product.belongsToMany(models.Size,{
            as:"sizes",
            through:"product_size",
            foreignKey:"productId",
            otherKey:"sizeId"
        })
    }

    return Product
}