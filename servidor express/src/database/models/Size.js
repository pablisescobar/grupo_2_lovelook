module.exports = function(sequelize, dataTypes) {
    let alias = "Size";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        }
    }
    let config = {
        tableName: "sizes",
        timestamps: false
    }

    const Size = sequelize.define(alias, cols, config)

    return Size
}