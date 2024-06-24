import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const db = new Sequelize("db_koperasi2", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
  benchmark: true,
});

export default db;
