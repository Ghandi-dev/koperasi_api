import User from "../models/user.js";
import response from "../response.js";

export const getUser = async (req, res) => {
  try {
    const result = await User.findAll();
    response(200, result, "get all User", res);
  } catch (error) {
    console.log(error.message);
  }
};
