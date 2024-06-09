const  comment = require('../models/comment.model.js');


const getComments=async(req,res)=>{

    try {
        const commentdetails = await comment.find({});
        res.status(200).json(commentdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}


const getComment =async(req,res)=>{
    try {
        const { id } = req.params;
        const commentdetails = await comment.findById(id);
        res.status(200).json(commentdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }


}

const createComment=async(req,res)=>{
    try {
        const commentdetails = await comment.create(req.body);
        res.status(200).json(commentdetails);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateComment=async(req,res)=>{
    try {
        const { id } = req.params;
        const commentdetails = await comment.findByIdAndUpdate(id, req.body);
        if (!commentdetails) {
          return res.status(404).json({ message: "User not found" });
        }
        const Updatedcomment = await comment.findById(id);
        res.status(200).json(Updatedcomment);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteComment=async(req,res)=>{
    try {
        const { id } = req.params;
        await comment.findByIdAndDelete(id);
        if (!comment) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json("Deleted Successfully");
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports={
    getComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}
