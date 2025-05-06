// routes/articles.js

const express = require("express");
const router = express.Router();
const dbSingleton = require("./dbSingleton");

const db = dbSingleton.getConnection();

//b
router.get("/", (req, res) => {
  const query = "SELECT * FROM articles";

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

//c
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM articles WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

//e
router.get("/name/:author", (req, res) => {
  const { author } = req.params;

  const query = "SELECT * FROM articles WHERE author = ?";

  db.query(query, [author], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

//f
router.get("/date/:createdDate", (req, res) => {
  const { createdDate } = req.params;

  const query = "SELECT * FROM articles WHERE created_at > ?";

  db.query(query, [createdDate], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

//g
router.get("/sort/date_sort", (req, res) => {
  const query = "SELECT * FROM articles ORDER BY created_at DESC";

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

//h
router.get("/count/count", (req, res) => {
  const query = "SELECT COUNT(*) FROM articles";

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

//i
router.get("/like/:word", (req, res) => {
  const { word } = req.params;

  const query = `SELECT * FROM articles WHERE title LIKE '%${word}%'`;

  db.query(query, [word], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

//j
router.get("/distinct", (req, res) => {
  const query = "SELECT DISTINCT author FROM articles";

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json(results);
  });
});

//a
router.post("/", (req, res) => {
  const { title, content, author } = req.body;
  const query =
    "INSERT INTO articles (title, content, author) VALUES (?, ?, ?);";

  db.query(query, [title, content, author], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "article added!", id: results.insertId });
  });
});

//d
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM articles WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "article deleted!" });
  });
});

module.exports = router;
