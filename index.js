console.log("hello world")
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5002

app.use(express.static("dist"))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});