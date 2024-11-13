const {DataTypes}=require('sequelize')
const sequelize=require('../config/dbConfig')

const Patient=sequelize.define('patient',{
    id:{
  type:DataTypes.BIGINT,
  allowNull:false,
  primaryKey:true,
  autoIncrement:true,

    },
    nom:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    prenom:{
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
    tel:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    genre:{
      type:DataTypes.ENUM['f','m'],
      allowNull:false
    },
    adresse:{
      type:DataTypes.STRING,
      allowNull:false
    },
    groupe_sanguin:{
      type:DataTypes.ENUM['a_positif','b_positif','a_negative','b_negative','ab_postif','ab_negative','o_postif','o_negative'],
      allowNull:false
    },
    num_dossier:{
      type:DataTypes.STRING,
      allowNull:false
    },
    date_debut:{
      type:DataTypes.DATE,
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
module.exports=Patient