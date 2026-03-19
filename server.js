const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});
app.get("/download", (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.send("Please provide video URL");
  }

  res.json({
    message: "Processing video...",
    video_url: url,
    download_link: "https://example.com/video.mp4"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

