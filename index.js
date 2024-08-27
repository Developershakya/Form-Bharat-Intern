const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Form = require("./models/form.js");

const app = express();
app.listen(3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
main()
  .then((req) => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log("error");
  });
async function main() {
  await mongoose.connect("mongodb://localhost:27017/");
}

app.get("/", (req, res) => {
  res.render("form");
});
app.post("/", (req, res) => {
  let { name, email, number } = req.body;
  console.log();
  let form = new Form({
    name: name,
    email: email,
    number: number,
  });
  console.log(form);
  form.save().then((req) => {
    console.log("data saved");
    res.render("index");
  })  .catch((err) => {
    console.log("error");
  });

});
