const express = require('express');   // express imported
const Notes = require('../models/Notes');  //Notes modle imported
const router = express.Router(); // using Router, simce express ke andar ek router hota hai
const fetchuser = require('../middleware/fetchuser');    // importing fetchuser
const { body, validationResult } = require('express-validator');  // validator imported

// ROUTE-1 Get all the notes: GET '/api/notes/fetchallnotes' login required, GET isliye kiya kyunki hume bas header se token lena hai
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id }); // User model mein jo user ki id's thi unko nikaalo, then {user: id} ho jayega, ab ek aisa field banaya hai humne Notes model mein jaha user object ke andar humne id store kari hai User model ke users ki, uske user id ke corresponding notes jo bhi Notes model mein store hai unhe find karo aur mil jaate hai to notes variable mein store kara do 
        res.json([notes]);  
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE-2 Add a new note: GET '/api/notes/addnotes' login required
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 chars long').isLength({ min: 5 }),
], async (req, res) => {

    try {
        // if there are errors, return the bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {   // agar errors empty nahi hai i.e false to !false i.e true karke if condition chalado
            return res.status(400).json({ errors: errors.array() });  // array of errors will be returned with msg,value,param and location
        }

        // agar koi error nahi hai tab neeche waali cheeze karo
        const { title, description, tag } = req.body;   // jab hum post request maarenge to uski req object ki body mein jo bhjenge usme se title, description and tag nikaallo using destructuring
        const notes = new Notes({
            title, description, tag, user: req.user.id
        });   // ek naya Notes model banado 

        const savedNote = await notes.save();  //database mein save karlo
        res.json([savedNote]);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    // AGAR NOTE VALID HAI to user can add the same note multiple times aur ye koi problem nahi hai
})



module.exports = router;  // This is written taaki is router ko inde.js mein app.use() ki madad se use kar paayein