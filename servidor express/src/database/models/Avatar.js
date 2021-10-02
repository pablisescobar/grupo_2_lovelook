module.exports = (sequelize, DataTypes) => {
    let alias = "Avatar";
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        filename: {
            type:DataTypes.STRING(50)
        }

    }
    let config = {
        tableName: "Avatars",
        timestamps: false
    }

    const Avatar = sequelize.define(alias, cols, config);

    return Avatar;
}