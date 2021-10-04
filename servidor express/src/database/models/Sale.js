/* module.exports=(sequelize,dataTypes)=>{
    const cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        userId:{
            type:dataTypes.INTEGER(11),
            allowNull: false
        },
        productId:{
            type:dataTypes.INTEGER(11),
            allowNull: false
        },
        createdAt: dataTypes.TIMESTAMP,
        updatedAt: dataTypes.TIMESTAMP,
    }
   let Sale = sequelize.define("Sale",cols,{
        tableName:"sales",
        timestamps:true
    })
    
    return Sale
} */