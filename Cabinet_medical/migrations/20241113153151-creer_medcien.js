'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('medciens',{
        id:{
          type:Sequelize.BIGINT,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
        
            },
            nom_prenom:{
              type:Sequelize.STRING,
              allowNull:false
        
            },
            email:{
              type:Sequelize.STRING,
              allowNull:false,
              unique:true
            },
            mot_de_passe:{
              type:Sequelize.STRING,
              allowNull:false
            },
            specialite:{
              type:Sequelize.STRING,
              allowNull:false
            },
            tel:{
              type:Sequelize.STRING,
              unique:true,
              allowNull:false
            },
            genre:{
              type:Sequelize.ENUM('f','m'),
              allowNull:false
            },
            adresse_cabinet:{
              type:Sequelize.STRING,
              allowNull:false
            },
            createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

          }
      });
     
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.dropTable('medciens');
     
  }
};
