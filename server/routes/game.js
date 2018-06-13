var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
  res.json({ name: 'Király csapat 1' });
});

router.get('/bid', function(req, res, next) {
  var maximum = req.body.standing.coins.own;
  res.json({ amount: 1 });
});

module.exports = router;
