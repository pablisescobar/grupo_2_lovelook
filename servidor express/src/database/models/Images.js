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
        }

    }
    let config = {
        tableName:  "images",
        timestamps:true
    }

    const Image = sequelize.define(alias, cols, config);

    return Image;
}