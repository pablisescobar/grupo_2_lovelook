

module.exports=(sequelize,DataTypes)=>{
    const cols= {
        id:{
            type:DataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true
            
        },
        firstName:{
            type:DataTypes.STRING(50),
            
        },
        lastName:{
            type:DataTypes.STRING(50),
            
        },
        phone:{
            type:DataTypes.INTEGER(50),
            
        },
        email:{
            type:DataTypes.STRING(100),
            
        },
        password:{
            type:DataTypes.STRING(60),
            
        },
       /*  rolId:{
            type:DataTypes.INTEGER(11),
            
        },
        locationId:{
            type:DataTypes.INTEGER(11),
           
        },
        avatarId:{
            type:DataTypes.INTEGER(11),
          
        }, */
        
    }
   let User = sequelize.define("User",cols,{
        tableName:"users",
        timestamps:false
    })

    return User
}