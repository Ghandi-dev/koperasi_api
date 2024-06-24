import User from "../models/User.js";
import response from "../response.js";

export const getUser = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};
