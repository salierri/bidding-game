var express = require('express');
var router = express.Router();

/*
  route: /new
  params: -
  response: { name: 'Name' }
*/

router.post('/new', function (req, res, next) {
  res.json({ name: 'KIRály csapat 1' });
});


/*
  route: /bid
  params: {
   standings: {
     coins: {
       own: 17,
       other: 183
     },
     trophies: {
       own: 2,
       other: 4
     }
   }
  }
  response: { amount: 10 }
*/

router.post('/bid', function (req, res, next) {
  var maximum = req.body.standings.coins.own;
  res.json({ amount: 1 });
});

module.exports = router;
