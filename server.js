const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());

app.get("/download", (req, res) => {
  const videoUrl = req.query.url;

  if (!videoUrl) {
    return res.json({ error: "No URL provided" });
  }

  const command = `yt-dlp -f best -g "${videoUrl}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.json({ error: "Failed to fetch video" });
    }

    const downloadLink = stdout.trim();

    res.json({
      message: "Success",
      download_link: downloadLink,
    });
  });
});

app.listen(3000, () => console.log("Server running"));