// const express = require('express');
// const router = express.Router();
// const admin = require('../models/admin');
// const mentor = require('../models/mentor')
// router.use(express.json());

// router.post('/login',async(req,res)=>{
//     try {
//         const user = await admin.findOne({email:req.body.email});
//         if(!user){
//             res.send('User not found');
//         }
//         else{
//             if(user.password==req.body.password){
//                 res.status(200).send('Login Successful')
//             }
//             else{
//                 res.status(400).send('Invalid Credentials')
//             }
//         }
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// })

// router.post('/admin',async(req,res)=>{
//     try {
//         var data=req.body;
//        await admin(data).save();
//         res.status(200).send("Data added successfully");
//     } catch (error) {
//         res.status(400).send('Unable to added');

//     }
// })

// router.post('/mentor/add',async(req,res)=>{
//     try {
//         var data=req.body;
//         await mentor(data).save();
//         res.status(200).send("Data added successfully");
//     } catch (error) {
//         res.status(400).send('Unable to added');

//     }
// })

// module.exports = router
const express=require('express');
const router=express.Router();
const mentor=require('../models/mentor');
const admin=require('../models/admin');
router.use(express.json());

router.post('/login',async(req,res)=>{
    try{
        const admin=await admin.findOne({email:req.body.email});
    if(!user){
        res.send('Usernot found');
    }
    if(user.password==req.body.password){
        res.status(200).send("Login Successful");
    }
    else{
        res.status(400).send('Invalid Credentials');
    }
 } catch(err){
console.log(err);
    }
})

// Add
router.post('/admin',async(req,res)=>{
    try {
        var data=req.body;
       await admin(data).save();
        res.status(200).send("Data added successfully");
    } catch (error) {
        res.status(400).send('Unable to added');

    }
})

router.post('/mentor/add',async(req,res)=>{
    try {
        var data=req.body;
        await mentor(data).save();
        res.status(200).send("Data added successfully");
    } catch (error) {
        res.status(400).send('Unable to added');

    }
})
module.exports=router;
