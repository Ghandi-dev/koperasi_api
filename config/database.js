import { Sequelize } from "sequelize";

const db = new Sequelize("db_koperasi2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
