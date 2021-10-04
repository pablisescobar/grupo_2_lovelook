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
    Avatar.associate=models=>{
        Avatar.belongTo(models.User,{
            as:"user",
            foreignKey:"avatarId"
        })
    }
    return Avatar;
}