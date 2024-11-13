const {DataTypes}=require('sequelize')
const sequelize=require('../config/dbConfig')
const Prescription=sequelize.define('prescription',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
      
          },
    contenu_prescription:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date_debut:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    date_fin:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    consultation:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'consultation',  
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
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
module.exports=Prescription