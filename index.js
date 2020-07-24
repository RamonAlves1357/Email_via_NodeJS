const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
    return res.status(200).end();
});

app.listen(3000);