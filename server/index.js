const express = require("express");
const mongoose =  require("mongoose");
const router = require("./router/router");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(`${MONGODB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("MongoDB connected Successfully")
    })
    .catch((error)=>{
        console.log("Can't conneect to the MongoDB");
        process.exit(1);
    });


app.use("/", router);

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
})
