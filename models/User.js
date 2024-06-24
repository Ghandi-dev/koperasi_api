import { Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    id_karyawan: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    password: { type: DataTypes.STRING, required: true, maxlength: 100 },
    level: { type: DataTypes.INTEGER, allowNull: false },
    aktif: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "user", // Nama tabel dalam database
    timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
  }
);
User.prototype.CorrectPassword = async (reqPassword, passwordDB) => {
  return await bcrypt.compareSync(reqPassword, passwordDB);
};
export default User;
