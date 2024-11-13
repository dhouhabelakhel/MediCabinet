const {DataTypes}=require('sequelize')
const sequelize=require('../config/dbConfig')
const Rdv=sequelize.define('rdv',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
      
          },
    date_rdv:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    etat_rdv:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    patient:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'patient',  
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
consultation:{
    type: DataTypes.INTEGER,
    allowNull: true,
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
module.exports=Rdv