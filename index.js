const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

const port = 5000;  

//read WU file and attach it to /api route
let rawdata = fs.readFileSync(path.resolve(__dirname, 'WU.json'));
let unis = JSON.parse(rawdata); 


//@GET request
app.get('/api/colleges',cors() ,(req, res)=>{
    
    res.json(unis);
});


app.listen(port, () => {

    console.log(`Server running on port ${port}`);
});
