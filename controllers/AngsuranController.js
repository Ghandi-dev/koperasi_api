import Angsuran from "../models/Angsuran.js";
import Pinjaman from "../models/Pinjaman.js";
import response from "../response.js";

export const getAngsuran = async (req, res) => {
  try {
    const user = req.user;
    if (user.level == 2) {
      const result = await Angsuran.findAll();
      res.status(200).json(result);
    } else {
      res.status(403).json({ message: "porbidden" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAngsuranByIdPinjaman = async (req, res) => {
  try {
    const result = await Angsuran.findAll({ where: { no_pinjaman: req.query.no_pinjaman, status: 2 } });

    if (!result) {
      return res.status(404).json({
        status: "Fail",
        message: "Angsuran not found for this pinjaman",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "Error",
      message: "Server error",
    });
  }
};

export const getSisaAngsuran = async (req, res) => {
  try {
    const pinjamanTerakhir = await Pinjaman.findOne({ where: { id_karyawan: req.user.id_karyawan, status: 0 } });
    console.log(pinjamanTerakhir);
    const result = await Angsuran.findAll({ where: { no_pinjaman: pinjamanTerakhir.no_pinjaman, status: 0 } });

    if (!result) {
      return res.status(404).json({
        status: "Fail",
        message: "Angsuran not found for this pinjaman",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "Error",
      message: "Server error",
    });
  }
};
