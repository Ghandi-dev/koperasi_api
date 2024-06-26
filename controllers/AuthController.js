import User from "../models/User.js";
import UserData from "../models/UserData.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // Pastikan bcryptjs diimport

const signToken = (id_karyawan) => {
  return jwt.sign({ id_karyawan }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRED_IN });
};

export const loginUser = async (req, res) => {
  try {
    const { id_karyawan, password } = req.body;

    // Validasi input
    if (!id_karyawan || !password) {
      return res.status(400).json({
        status: "Fail",
        message: "Error validasi",
        error: "Please input id_karyawan/password",
      });
    }

    // Cari user berdasarkan id_karyawan
    const user = await User.findOne({ where: { id_karyawan: id_karyawan } });
    const userData = await UserData.findOne({ where: { id_karyawan: id_karyawan } });

    // Validasi user dan password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "Fail",
        message: "Error login",
        error: "Invalid id_karyawan or password",
      });
    }

    // Tanda tangani token
    const token = signToken(user.id_karyawan);

    return res.status(200).json({
      username: userData.nama_lengkap,
      status: "Success",
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: "Error",
      message: "Server error",
    });
  }
};

export const registration = async (req, res) => {
  const { id_karyawan, nama_lengkap, status, alamat, no_rek, password } = req.body;

  try {
    // Create user data
    const resDataUser = await UserData.create({
      id_karyawan,
      nama_lengkap,
      status,
      alamat,
      no_rek,
    });
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const resUser = await User.create({
      id_karyawan,
      password: hashedPassword,
      level: 1,
      aktif: 2,
    });

    // Respond with created user details
    return res.status(200).json(resUser);
  } catch (error) {
    // Handle any errors
    console.error("Error creating user:", error);
    return res.status(500).json({
      status: "Error",
      message: "Internal server error",
    });
  }
};
