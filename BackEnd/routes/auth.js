const express = require('express');   // express imported
const User =  require('../models/User');  //User module imported
const router = express.Router(); // using Router, simce express ke andar ek router hota hai
const user = User
// router.get('/', (req, res)=>{   // since we are using router to hum app.get nahi router.get karenge, also '/' /api/auth jo ki app.use() mein index.js file mein likhi hai ke last mein lagega aur aisa dikhega fir /api/auth/....uske baad callback function run hoga with two parameters request and response
    // obj = {
    //     a: "thios",
    //     number: 99
    // }
    // res.json(obj);
// })


// How to send something in request ki body
// router.post('/', (req,res)=>{
//     console.log(req.body);
//     res.send('hello')
// })

// Create a User using: POST "/api/auth/" , Doesn't require Auth
// User ko create karne ke liye req ki body mein likhna padega data in json format....video 45 mein hum thunderclient ki help se body ka json content likh rahe hai
// router.post('/', (req,res)=>{
//     console.log(req.body);
//     // res.send('hello')
//     res.send(req.body);
// })


// Creating New User
router.post('/', (req,res)=>{
    console.log(req.body);
    const user = User(req.body);   // Creating New User
    user.save();     // new User created in mongodb database, email set to unique in User schema, therefore body with duplicate email will not add in db and throw error
    res.send(req.body);
})


module.exports = router;  // This is written taaki is router ko inde.js mein app.use() ki madad se use kar paayein