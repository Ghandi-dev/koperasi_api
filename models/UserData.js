import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const UserData = db.define(
  "userdata",
  {
    id_karyawan: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    nama_lengkap: { type: DataTypes.STRING, required: true, maxlength: 100 },
    status: { type: DataTypes.STRING, required: true, maxlength: 11 },
    alamat: { type: DataTypes.STRING, required: true, maxlength: 200 },
    no_rek: { type: DataTypes.STRING, required: true, maxlength: 14 },
  },
  {
    tableName: "userdata", // Nama tabel dalam database
    timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
  }
);

export default UserData;
