const express = require("express");
const app = express();

app.use(express.static("dist"));

const PORT = process.env.PORT || 2021;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
