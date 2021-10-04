module.exports = (sequelize, DataTypes) => {
    let alias = "Location";
    let cols = {
        id: {
            type:DataTypes.INTEGER(11),
            primarykey: true,
            autoIncrement: true,
        },
        province: {
            type:DataTypes.STRING(50)
        },
        city: {
            type:DataTypes.STRING(50)
        },
        pc: {
            type:DataTypes.INTEGER(11) 
        },
        address:{
            type:DataTypes.STRING(50)
        }

    }
    let config = {
        tableName:  "locations",
        timestamps:false
    }

    const Location = sequelize.define(alias, cols, config)
    Location.belongsTo(models.User,{
        as:"user",
        foreignKey:"locationId"
    })
    return Location;
}