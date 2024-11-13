'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('prescriptions', {
        id:{
          type:Sequelize.BIGINT,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
        
            },
      contenu_prescription:{
          type:Sequelize.STRING,
          allowNull:false
      },
      date_debut:{
          type:Sequelize.DATE,
          allowNull:false,
      },
      date_fin:{
          type:Sequelize.DATE,
          allowNull:false,
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
   
      await queryInterface.dropTable('prescriptions');
     
  }
};
