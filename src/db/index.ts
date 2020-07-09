import { Sequelize } from 'sequelize-typescript';
import config = require('./config/config');

const dbOption = config[ process.env.NODE_ENV || 'development' ];

const sequelize = new Sequelize({
  ...dbOption,
  models: [],
});

export {};
