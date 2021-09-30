module.exports=(sequelize,DataTypes)=>{
    const cols= {
        id:{
            type:DataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(50)
        }
    }
   let Rol = sequelize.define("Rol",cols,{
        tableName:"roles",
        timestamps:false
    })

    return Rol
}