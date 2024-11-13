const {DataTypes}=require('sequelize')
const sequelize=require('../config/dbConfig')
const Consultation=sequelize.define('consulation',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
      
          },
    heure_debut:{
        type:DataTypes.TIME,
        allowNull:false
    },
    heure_fin:{
        type:DataTypes.TIME,
        allowNull:false   
    },
    duree:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:0,
            max:60
        }
    },
    rdv:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'rdv',  
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    medcien:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'medcien',  
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'  
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
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
module.exports=Consultation