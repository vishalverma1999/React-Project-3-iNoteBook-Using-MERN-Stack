const express = require('express');   // express imported

const router = express.Router(); // using Router, simce express ke andar ek router hota hai

router.get('/', (req, res)=>{
    res.json([]);
})


module.exports = router;  // This is written taaki is router ko inde.js mein app.use() ki madad se use kar paayein