module.exports = (sequelize, DataTypes) => {
    let alias = "Season";
    let cols = {
        id: {
            type:DataTypes.INTEGER(11),
            primarykey:true,
            autoIncrement:true
        },
        name: {
            type:DataTypes.STRING(50),
            allowNull:true
        }

    }
    let config = {
        tableName:  "seasons",
        timestamps: false
    }

    const Season = sequelize.define(alias, cols, config);

    return Season;
}