'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('rdvs', {
        id:{
          type:Sequelize.BIGINT,
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
        
            },
      date_rdv:{
          type:Sequelize.DATE,
          allowNull:false,
      },
      etat_rdv:{
          type:Sequelize.BOOLEAN,
          allowNull:false,
          defaultValue:false
      },
      patient:{
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
              model: 'patients',  
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
   
      await queryInterface.dropTable('rdvs');
     
  }
};
