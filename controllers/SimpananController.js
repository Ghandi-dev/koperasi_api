import Simpanan from "../models/Simpanan.js";
import response from "../response.js";

export const getSimpanan = async (req, res) => {
  try {
    const user = req.user;
    if (user.level == 2) {
      const result = await Simpanan.findAll();
      response(200, result, "get all Simpanan", res);
    } else {
      res.status(403).json({ message: "porbidden" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
