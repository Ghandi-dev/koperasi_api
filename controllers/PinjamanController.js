import Pinjaman from "../models/Pinjaman.js";
import response from "../response.js";

export const getPinjaman = async (req, res) => {
  try {
    const user = req.user;
    if (user.level == 2) {
      const result = await Pinjaman.findAll();
      response(200, result, "get all Pinjaman", res);
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
    response(200, result, "get all Pinjaman By User Id", res);
  } catch (error) {
    console.log(error.message);
  }
};
