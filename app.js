const express = require('express');
const mongoose = require('./mongoose');
const app = express();




const port = 8000;
app.listen(port,()=>{
 console.log(`listening on port ${port}`);
});