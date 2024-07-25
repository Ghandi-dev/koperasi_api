import UserData from "../models/UserData.js";
import response from "../response.js";

export const getUserData = async (req, res) => {
  try {
    const result = await UserData.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserDataById = async (req, res) =>{
  try {
    const result = await UserData.findAll({ where: { id_karyawan: req.user.id_karyawan } });
    res.status(200).json(result)
  } catch (error) {
    console.log(error.message);
  }
}
