const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Method: " + req.method);
    res.status(200).json({message: "Hello World"});
})


app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json({message: "Ok"});
})

app.delete("/", (req, res) => {
    console.log("URL: " + req.url);
    res.status(200).json({message: "Delete"});
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))