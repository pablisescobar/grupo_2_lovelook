module.exports = (sequelize, dataTypes) => {
    let alias = "Message";
    let cols = {
        id: {
            type:dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        msg:{
            type:dataTypes.TEXT, 
            allowNull:false 
        },
        issue:{
            type:dataTypes.STRING(100),
            allowNull:false  
        },
        name:{
            type:dataTypes.STRING(50),
            allowNull:false  
        },
        lastName:{
            type:dataTypes.STRING(50),
            allowNull:false  
        },
        dni:{
            type:dataTypes.INTEGER,
            allowNull:false  
        },
        email:{
            type:dataTypes.STRING(100),
            allowNull:false  
        },
        phone:{
            type:dataTypes.INTEGER
        },
        cv:{
            type:dataTypes.STRING(100) 
        },
        location:{
            type:dataTypes.STRING(100) 
        },
        address:{
            type:dataTypes.STRING(100) 
        },
        city:{
            type:dataTypes.STRING(100) 
        },
        cuit:{
            type:dataTypes.INTEGER
        },
        businessName:{
            type:dataTypes.STRING(50) 
        },
        socialAddress:{
            type:dataTypes.STRING(50) 
        }
    }
    let config = {
        tableName:"messages",
        timestamps:false
    }

    const Message = sequelize.define(alias, cols, config)
    return Message;
}