var express = require('express');

exports.enhance = function(app) {

  console.log('Enhance dev server application');

  var bodyParser = require('body-parser');

  app.use(bodyParser.json());

  app.get(/editorapi/, function(req, res) {
    console.log('[FILE DEV] Fetching content of ' + req.path);
    var fs = require('fs');
    fs.readFile(req.path.replace('/editorapi/', './'), 'utf8', function(err, contents) {
      if (err) return console.log(err);
      res.send(contents);
    });
  });

  app.post(/editorapi/, function(req, res) {
    console.log('[FILE DEV] Saving content of ' + req.path);
    var fs = require('fs');
    var newCode = req.body.code;
    fs.writeFile(req.path.replace('/editorapi/', './'), newCode, function (err) {
      if (err) return console.log(err);
      res.send(newCode);
    });
  });
};
