'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('consultations', 
        {
          id:{
            type:Sequelize.BIGINT,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
          
              },
        heure_debut:{
            type:Sequelize.TIME,
            allowNull:false
        },
        heure_fin:{
            type:Sequelize.TIME,
            allowNull:false   
        },
        duree:{
            type:Sequelize.INTEGER,
            allowNull:false,
            validate:{
                min:0,
                max:60
            }
        },
      
        medcien:{
            type: Sequelize.BIGINT,
            allowNull: false,
            references: {
                model: 'medciens',  
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'  
        },
        description:{
            type:Sequelize.STRING,
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
        }
      );
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
