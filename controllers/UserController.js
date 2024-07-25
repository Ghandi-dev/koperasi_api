import User from "../models/User.js";
import bcrypt from "bcryptjs"; // Pastikan bcryptjs diimport
export const getUser = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

export const changePassword = async (req,res)=>{
  try {
    const user = req.user; // Mendapatkan pengguna yang diautentikasi dari request
    const { oldPassword, newPassword } = req.body; // Mendapatkan kata sandi lama dan baru dari request body

    // Verifikasi kata sandi lama
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Kata sandi lama tidak sesuai' });
    }

    // Mengenkripsi kata sandi baru
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Memperbarui kata sandi di database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Kata sandi berhasil diubah' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
}
