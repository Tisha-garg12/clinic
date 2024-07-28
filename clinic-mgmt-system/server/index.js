const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./db');
const docRoute = require("./routes/docRoute");
const receptRoute = require("./routes/receptRoute");


const app = express();
//app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({extended:true,limit:'32mb'}));
app.use(bodyParser.urlencoded({limit:'32mb',extended:true}));

connectDB();

app.use("/api/docs",docRoute);
app.use("/api/recept",receptRoute);

app.get('/',(req,res)=>{
    res.send('Welcome to the API');
})

app.listen(1400,()=>console.log(`Running on Port 1400 `))