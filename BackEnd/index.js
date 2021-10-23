const connectToMongo = require('./db');     //exported connectToMongo function from db.js is grabbed in index.js
const express = require('express');      // index.js actually mein ek express server rahega

connectToMongo();  // Now run connectToMongo, since we have successfully taken connectToMongo from db.js
// Run karne ke liye we will use nodemon package that is npm i -D nodemon, -D is used to use it as devDependencies and don't want to make part of packages


const app = express()
const port = 3000

app.get('/', (req, res) => {    //.get ek endpoint hai jo Hello vishal! return kar raha hai
  res.send('Hello vishal!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

// pehle 'Example app listening at http://localhost:3000' chalega fir 'Connected to mongo successfully', Kyunki mongo connect hone mein thoda time lega tab tak uske neeche ka code chalne lagega...aur jaise hi connect ho jayega waise hi callback function chal jayega
// Basically asynchronously kaam hoga