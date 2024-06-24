import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Pinjaman = db.define(
  "pinjaman",
  {
    no_pinjaman: {
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
    nominal: { type: DataTypes.INTEGER, allowNull: false },
    bunga: { type: DataTypes.FLOAT, allowNull: false },
    tgl_pinjaman: { type: DataTypes.DATE, allowNull: false },
    tgl_selesai: { type: DataTypes.DATE, allowNull: false },
    jangka_waktu: { type: DataTypes.INTEGER, allowNull: false },
    angsuran: { type: DataTypes.INTEGER, allowNull: false },
    jenis_pinjaman: { type: DataTypes.STRING, required: true, maxlength: 200 },
    keterangan: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "pinjaman", // Nama tabel dalam database
    timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
  }
);

export default Pinjaman;
