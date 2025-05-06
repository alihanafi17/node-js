const express = require("express");
const app = express();
const articleRoutes = require("./articles");
const port = 3000;

app.use(express.json());

app.use("/articles", articleRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
