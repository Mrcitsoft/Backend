const express =require("express");
const router =express.Router();
const {getUsers,deleteUser}=require('../controller/user.controller.js');
const{getUser,createUser,updateUser}=require('../controller/user.controller.js')

router.get('/', getUsers);
router.get('/:id',getUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);



module.exports=router;