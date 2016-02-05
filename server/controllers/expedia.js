var express = require('express'),
    helper  = require('../helpers/expediaHelper.js'),
    router  = express.Router();

router.post('/', function(req, res){
  var location = req.body.city;
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;

  helper.thingsToDo(location, startDate, endDate, function(thingsToDo){
    res.send(thingsToDo);
  });
});

router.post('/detail', function(req, res){
  var id = req.body.id;

  helper.thingsToDoDetail(id, function(thingsToDoDetail){
    res.send(thingsToDoDetail);
  });
});

module.exports = router;
