import Angsuran from "../models/Angsuran.js";
import Pinjaman from "../models/Pinjaman.js";
import response from "../response.js";

export const getAngsuran = async (req, res) => {
  try {
    const user = req.user;
    if (user.level == 2) {
      const result = await Angsuran.findAll();
      response(200, result, "get all Angsuran", res);
    } else {
      res.status(403).json({ message: "porbidden" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAngsuranByIdPinjaman = async (req, res) => {
  try {
    console.log(req.no_pinjaman);
    const result = await Angsuran.findAll({ where: { no_pinjaman: req.body.no_pinjaman } });

    if (!result) {
      return res.status(404).json({
        status: "Fail",
        message: "Angsuran not found for this pinjaman",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Get Angsuran By id",
      data: result,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "Error",
      message: "Server error",
    });
  }
};
