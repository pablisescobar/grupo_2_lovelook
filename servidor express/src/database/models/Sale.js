module.exports=(sequelize,DataTypes)=>{
    const cols= {
        id:{
            type:DataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
        },
        userId:{
            type:DataTypes.INTEGER(11)
        },
        productId:{
            type:DataTypes.INTEGER(11)
        }
    }
   let Sale = sequelize.define("Sale",cols,{
        tableName:"sales",
        timestamps:true
    })

    return Sale
}