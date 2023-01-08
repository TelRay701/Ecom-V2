const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const Dotenv = require("dotenv");

Dotenv.config();
const api = mysql.createConnection({
  host: "ecom.csoo2foypql9.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Rmte4744",
  database: "products",
});

api.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("connected to server");
  }
});

const handleQueryResult = (err, results, res) => {
  if (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
  if (results.length === 0) {
    return res.status(404).send("No results found");
  }
  res.status(200).send(results);
};

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Products", (req, res) => {
  const sql = "SELECT * FROM items";
  api.query(sql, (err, results) => {
    res.send(results);
  });
});

app.get("/Monitor", (req, res) => {
  const sql = "SELECT * FROM items WHERE category = 'monitor'";
  api.query(sql, (err, results) => {
    handleQueryResult(err, results, res);
  });
});

app.get("/Desktop", (req, res) => {
  const sql = "SELECT * FROM items WHERE category = 'desktop'";
  api.query(sql, (err, results) => {
    handleQueryResult(err, results, res);
  });
});

app.get("/Keyboard", (req, res) => {
  const sql = "SELECT * FROM items WHERE category = 'keyboard'";
  api.query(sql, (err, results) => {
    handleQueryResult(err, results, res);
  });
});

app.get("/Products/LowtoHigh", (req, res) => {
  const sql = "SELECT * FROM items ORDER BY price ASC";
  api.query(sql, (err, results) => {
    handleQueryResult(err, results, res);
  });
});

app.get("/Products/HightoLow", (req, res) => {
  const sql = "SELECT * FROM items ORDER BY price DESC";
  api.query(sql, (err, results) => {
    handleQueryResult(err, results, res);
  });
});

app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
