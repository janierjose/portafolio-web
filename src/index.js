const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/nosotros", (req, res) => {
  res.render("nosotros");
});

app.get("/servicios", (req, res) => {
  res.render("servicios");
});

app.get("/portafolio", (req, res) => {
  res.render("portafolio");
});

app.get("/contacto", (req, res) => {
  res.render("contacto");
});

app.post("/contacto", (req, res) => {
  const { email, pswd } = req.body;
  console.log(email, pswd);
});

// static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
