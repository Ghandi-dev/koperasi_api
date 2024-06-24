import Simpanan from "../models/Simpanan.js";
import response from "../response.js";

export const getSimpanan = async (req, res) => {
  try {
    const user = req.user;
    if (user.level == 2) {
      const result = await Simpanan.findAll();
      res.status(200).json(result);
    } else {
      res.status(403).json({ message: "porbidden" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getSimpananByUserId = async (req, res) =>{
  try {
    const result = await Simpanan.findAll({ where: { id_karyawan: req.user.id_karyawan } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}
