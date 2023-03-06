import Sequelize from "sequelize";
import config from "../configs/config.js";

const env = process.env.NODE_ENV || "development";
config[env];

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_DIALECT = process.env.DB_DIALECT;

// console.log(DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_DIALECT);

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: DB_DIALECT,
});

export default sequelize;
