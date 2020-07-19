const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`<h1 style="color: blue; margin-top: 25px;">Hello from Express!</h1>`);
});

module.exports = router;