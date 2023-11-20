const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('USERS');
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('Sin parámetros');
  }
});

module.exports = router;
