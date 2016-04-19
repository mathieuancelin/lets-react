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

  function generateChildren(nbr) {
    var children = [];
    var id = 0;
    for (var i = 0; i < nbr; i++) {
      var first = i % 2 === 0;
      children.push({
        data: {
          id: String(i),
          title: 'Story ' + i,
          ups: 42 + i,
          downs: 0,
          'over_18': false,
          url: 'http://imgur.com/image',
          thumbnail: first ? '/backupreddit/thumbnail.jpg' : '/backupreddit/thumbnail2.jpg',
          preview: {
            images: [
              {
                source: {
                  url: first ? '/backupreddit/0Yn4jYMM-0LO1mgLvMAt8-PUbFUCPBapyXsQo_tCNn8.jpg' : '/backupreddit/deadpool.jpg',
                  width: 800,
                  height: 600
                }
              }
            ]
          }
        }
      });
    }
    return children;
  }

  app.get('/api/r/funny.json', function(req, res) {
    res.send({
      data: {
        children: generateChildren(25)
      }
    });
  });

  app.get('/api/r/pics.json', function(req, res) {
    res.send({
      data: {
        children: generateChildren(25)
      }
    });
  });
};
