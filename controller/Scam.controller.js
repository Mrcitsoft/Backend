const  scam = require('../models/ScamReports.model');
const scamdata=require('../models/ScamReports.model')

const getScams=async(req,res)=>{

    try {
        const Scamdetails = await scam.find({});
        res.status(200).json(Scamdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}


const getScam =async(req,res)=>{
    try {
        const { id } = req.params;
        const Scamdetails = await scam.findById(id);
        res.status(200).json(Scamdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }


}

const createScam=async(req,res)=>{
    try {
        const Scamdetails = await scamdata.create(req.body);
        res.status(200).json(Scamdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateScam=async(req,res)=>{
    try {
        const { id } = req.params;
        const Scamdetails = await scam.findByIdAndUpdate(id, req.body);
        if (!Scamdetails) {
          return res.status(404).json({ message: "User not found" });
        }
        const Updatedscam = await scam.findById(id);
        res.status(200).json(Updatedscam);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deletescam=async(req,res)=>{
    try {
        const { id } = req.params;
        await scam.findByIdAndDelete(id);
        if (!scam) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json("Deleted Successfully");
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports={
    getScams,
    getScam,
    createScam,
    updateScam,
    deletescam
}
