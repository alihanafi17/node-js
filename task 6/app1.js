const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const logger = require("./logger");

app.use(logger);
const users = [
  { username: "admin123", password: "admin123", role: "admin" },
  { username: "admin234", password: "admin234", role: "admin" },
  { username: "user123", password: "user123", role: "user" },
  { username: "user678", password: "user678", role: "user" },
];
app.get("/", (req, res) => {
  res.send("welcome to home page");
});
app.get("/admin", (req, res) => {
  const { username } = req.query;
  if (username) {
    const currentUser = users.find(
      (el) => el.username === username && el.role === "admin"
    );
    if (currentUser) {
      res.send("welcome to admin page");
    } else {
      return res.status(403).send("access denied");
    }
  } else {
    return res.status(403).send("access denied");
  }
});

app.get("/public", (req, res) => {
  res.send("this is public page");
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
