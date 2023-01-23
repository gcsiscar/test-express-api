const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("GET Request: " + req.url)
    res.status(200).json({message: "Hello World"})
})


app.post("/", (req, res) => {
    console.log("POST Request: " + req.url)
    res.status(200).json({message: "Hello World"})
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))