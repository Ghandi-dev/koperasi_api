import UserData from "../models/UserData.js";
import response from "../response.js";

export const getUserData = async (req, res) => {
  try {
    const result = await UserData.findAll();
    response(200, result, "get all User Data", res);
  } catch (error) {
    console.log(error.message);
  }
};
