const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "development";

app.get("/", (req, res) => {
  res.json({
    app: "MiniRender Demo",
    version: APP_VERSION,
    status: "running",
    hostname: require("os").hostname()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MiniRender listening on port ${PORT}`);
});
