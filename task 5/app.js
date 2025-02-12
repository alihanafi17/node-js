const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const logger = require("./logger");
const { products, users } = require("./assets/data");

app.use(logger);
//easy route
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id; //get path params from url
  currentProduct = products.find((el) => el.id === id);
  if (currentProduct) {
    res.json(currentProduct);
  } else {
    return res.status(404).send("product not found");
  }
});
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/users/:age?", (req, res) => {
  const age = req.params.age; //get path params from url
  if (age) {
    filteredUsers = users.filter((el) => el.age > age);
    if (filteredUsers) {
      res.json(filteredUsers);
    }
  } else {
    res.send(users);
  }
});

//route for every page along

// // ** Route for main page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// // ** Route for CSS
// app.get('/style.css', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'style.css'));
// });

// // ** Route for JS
// app.get('/js.js', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'js.js'));
// });

// // ** Route for image
// app.get('/1.jpg', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', '1.jpg'));
// });

// // Route for about page
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })
// 404 error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "assets", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
