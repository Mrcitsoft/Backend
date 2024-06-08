const user=require('../models/product.models');
const userdata = require('../models/product.models');

const getUsers=async(req,res)=>{

    try {
        const Userdetails = await user.find({});
        res.status(200).json(Userdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}


const getUser =async(req,res)=>{
    try {
        const { id } = req.params;
        const Userdetails = await user.findById(id);
        res.status(200).json(Userdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }


}

const createUser=async(req,res)=>{
    try {
        const Userdetails = await userdata.create(req.body);
        res.status(200).json(Userdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateUser=async(req,res)=>{
    try {
        const { id } = req.params;
        const Userdetails = await user.findByIdAndUpdate(id, req.body);
        if (!Userdetails) {
          return res.status(404).json({ message: "User not found" });
        }
        const Updateduser = await user.findById(id);
        res.status(200).json(Updateduser);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteUser=async(req,res)=>{
    try {
        const { id } = req.params;
        await user.findByIdAndDelete(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json("Deleted Successfully");
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports={
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}