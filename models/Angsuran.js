import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Angsuran = db.define(
  "angsuran",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    no_pinjaman: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    angsuran: { type: DataTypes.INTEGER, allowNull: false },
    jatuh_tempo: { type: DataTypes.DATE, allowNull: false },
    tgl_bayar: { type: DataTypes.DATE, allowNull: true },
    bayar: { type: DataTypes.INTEGER, allowNull: false },
    sisa: { type: DataTypes.INTEGER, allowNull: false },
    denda: { type: DataTypes.INTEGER, allowNull: false },
    jumlah: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false, maxlength: 15 },
  },
  {
    tableName: "angsuran", // Nama tabel dalam database
    timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
  }
);

export default Angsuran;
