'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('patients',

        {
          id:{
            type:Sequelize.BIGINT,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
          
              },
              nom:{
                type:Sequelize.STRING,
                allowNull:false,
              },
              prenom:{
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
              tel:{
                type:Sequelize.STRING,
                unique:true,
                allowNull:false
              },
              age:{
                type:Sequelize.INTEGER,
                allowNull:false
              },
              genre:{
                type:Sequelize.ENUM('f','m'),
                allowNull:false
              },
              adresse:{
                type:Sequelize.STRING,
                allowNull:false
              },
              groupe_sanguin:{
                type:Sequelize.ENUM('a_positif','b_positif','a_negative','b_negative','ab_postif','ab_negative','o_postif','o_negative'),
                allowNull:false
              },
              num_dossier:{
                type:Sequelize.STRING,
                allowNull:false
              },
              date_debut:{
                type:Sequelize.DATE,
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
        }
      );
     
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.dropTable('patients');
     
  }
};
