//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const { static } = require("express");

const app = express();

let items = ["buy Food", "Cook Food", "eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", option);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
