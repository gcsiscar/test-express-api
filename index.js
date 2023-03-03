const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Method: " + req.method);
    res.status(200).json({ message: "Hello World" });
})


app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: "Ok" });
})

app.delete("/:key", (req, res) => {
    const host = req.hostname;
    const url = req.originalUrl;
    console.log("URL: " + host + url);
    res.status(200).json({ message: "Delete" });
})

app.post("/webhook", (req, res) => {
    console.log(req.body)

    res.status(200).json({ message: "Webhook Received" });
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))