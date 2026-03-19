const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/process", (req, res) => {
  const url = req.body.url;

  res.json({
    status: "success",
    message: "API working 🔥",
    link_received: url
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});