const express = require('express');   // express imported

const router = express.Router(); // using Router, simce express ke andar ek router hota hai

router.get('/', (req, res)=>{   // since we are using router to hum app.get nahi router.get karenge, also '/' slash ke aage ka /api/auth hume index.js mein app.use se milega....uske baad callback function run hoga with two parameters request and response, request tab chalega jab hum request karenge obviously
    obj = {
        a: "thios",
        number: 99
    }
    res.json(obj);
})


module.exports = router;  // This is written taaki is router ko inde.js mein app.use() ki madad se use kar paayein