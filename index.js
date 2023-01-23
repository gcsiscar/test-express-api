const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello World"})
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))