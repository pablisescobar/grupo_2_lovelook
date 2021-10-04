module.exports = (sequelize, dataTypes) => {
    let alias = "Avatar";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        filename: {
            type:dataTypes.STRING(50),
            allowNull: false
        }

    }
    let config = {
        tableName: "avatars",
        timestamps: false
    }

    const Avatar = sequelize.define(alias, cols, config);
    Avatar.associate=models=>{
        Avatar.belongTo(models.User,{
            as:"user",
            foreignKey:"avatarId"
        })
    }
    return Avatar;
}