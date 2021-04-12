const express= require("express");
const connectdb=require("./db");
const app = express();

// Connecting to DB
connectdb();
app.get('/', (req, res) =>res.send("API running"));
const PORT= 8000;
app.listen(PORT,() => console.log('Server started at port ${PORT}'));