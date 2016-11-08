var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var result = 'Invalid fullname';

  if (undefined != req.query.fullname) {
    var fullname = req.query.fullname.split(' ');
    if (fullname.length <= 3) {
      result = '';
      fullname.forEach(function(e,i) {
        if (i > 0) {
          result += ' ' + e.substring(0,1) + '.';
        } else {
          result = e;
        }
      });
    } else {
      result = 'Invalid fullname';
    }
  }
  res.send(result);
});

app.listen(3000);
