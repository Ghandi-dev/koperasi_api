import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Simpanan = db.define(
  "simpanan",
  {
    no_simpanan: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_karyawan: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
    },
    tgl_simpanan: { type: DataTypes.DATE, allowNull: false },
    simpanan: { type: DataTypes.INTEGER, allowNull: false },
    jenis_simpanan: { type: DataTypes.STRING, required: true, maxlength: 20 },
    status: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "simpanan", // Nama tabel dalam database
    timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
  }
);

export default Simpanan;
