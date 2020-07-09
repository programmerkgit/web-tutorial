import { QueryInterface } from 'sequelize';

const tableName = 'Blogs';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return queryInterface.createTable(tableName, {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },

    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },

  });

};

export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable(tableName);
};
