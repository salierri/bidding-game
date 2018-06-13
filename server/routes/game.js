var express = require('express');
var router = express.Router();

router.post('/new', function (req, res, next) {
  res.json({ name: 'Király csapat 1' });
});

router.post('/bid', function (req, res, next) {
  var maximum = req.body.standings.coins.own;
  res.json({ amount: 1 });
});

module.exports = router;
