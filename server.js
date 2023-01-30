import express from "express";
import hbs from "hbs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", hbs);
app.use(bodyParser.urlencoded({ extended: true }));

let voter1 = 0;
let voter2 = 0;
let voter3 = 0;

app.get("/get", (req, res) => {
  res.render("election.hbs");
});

app.post("/send", (req, res) => {
  if (req.body.candidate == "voter1") {
    voter1++;
  } else if (req.body.candidate == "voter2") {
    voter2++;
  } else if (req.body.candidate == "voter3") {
    voter3++;
  }

  res.render("result.hbs", { voter1, voter2, voter3 });
});

app.listen(port);
console.log("Server is listening on port " + port);
