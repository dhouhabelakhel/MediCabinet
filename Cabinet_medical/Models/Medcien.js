const {DataTypes}=require('sequelize')
const sequelize=require('../config/dbConfig')
const Medcien=sequelize.define('medcien',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
      
          },
          nom_prenom:{
            type:DataTypes.STRING,
            allowNull:false
      
          },
          email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
          },
          mot_de_passe:{
            type:DataTypes.STRING,
            allowNull:false
          },
          specialite:{
            type:DataTypes.STRING,
            allowNull:false
          },
          tel:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
          },
          genre:{
            type:DataTypes.ENUM('f','m'),
            allowNull:false
          },
          adresse_cabinet:{
            type:DataTypes.STRING,
            allowNull:false
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
})
module.exports=Medcien