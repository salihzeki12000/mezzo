var express = require('express'),
    helper  = require('../helpers/alchemyHelper.js'),
    router  = express.Router();

router.post('/', function(req, res){
  var keyword = req.body.city;

  helper.articles(keyword, function(articles){
    res.send(articles);
  });
});

router.post('/url', function(req, res){
  var url = req.body.url;

  helper.text(url, function(text){
    res.send(text);
  });
});

module.exports = router;
