import Pinjaman from "../models/Pinjaman.js";
import response from "../response.js";

export const getPinjaman = async (req, res) => {
  try {
    const user = req.user;
    if (user.level == 2) {
      const result = await Pinjaman.findAll();
      res.status(200).json(result)
    } else {
      res.status(403).json({ message: "porbidden" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getPinjamanByUserId = async (req, res) => {
  try {
    const result = await Pinjaman.findAll({ where: { id_karyawan: req.user.id_karyawan } });
    res.status(200).json(result)
  } catch (error) {
    console.log(error.message);
  }
};
