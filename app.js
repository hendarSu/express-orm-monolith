const express = require("express");
const router = require("./routers/router");
const web = require("./routers/web");
const app = express();
const port = 3000;

// Middleware content-type
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set("view engine", "ejs");

app.use("/ping", (req, res) => {
    res.status(200).json({
        status: "server up!"
    })
});

app.use("/", web);
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

