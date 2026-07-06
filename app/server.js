const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({
	  message: "Hello I'am imene from tunisa"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
