const express = require('express');   // express imported
const User =  require('../models/User');  //User module imported
const router = express.Router(); // using Router, since express ke andar ek router hota hai
const { body, validationResult } = require('express-validator');  // validator imported


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
router.post('/',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),   // 'Enter a valid name'--> default msg to show in errors array if validation is not true
    body('email', 'Enter a valid email').isEmail(),   // ek valid email hona chaiye
    body('password', 'password must be at least 5 chars long').isLength({ min: 5 }),
], (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {   // agar errors empty nahi hai i.e false to !false i.e true karke if condition chalado
      return res.status(400).json({ errors: errors.array() });  // array of errors will be returned with msg,value,param and location
    }

    User.create({          // creating user in mongodb last video mein shayad user.save() se kiya tha
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
      .catch((error)=>{console.log(error)
      res.json({error: 'please enter unique email', message: error.message})})   // error.message--> displays the message
})


module.exports = router;  // This is written taaki is router ko inde.js mein app.use() ki madad se use kar paayein