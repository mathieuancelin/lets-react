module.exports = function(data) {
  return {
    '200.html': data.defaultTemplate(),
    'index.html': [
      '<!doctype html>',
        '<html>',
          '<head>',
            '<meta charset="utf-8"/>',
            '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>',
            '<link href="http://fonts.googleapis.com/css?family=Lobster+Two:400,700" rel="stylesheet" type="text/css">',
            '<link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" rel="stylesheet" type="text/css">',
            '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
            '<style>',
            '.clock,svg{width:100%}',
            '.clock{position:relative;height:0;margin:20px}',
            '.svgComponent{position:absolute;height:100%}',
            '.clock-face{stroke:#333;fill:#fff}',
            '.minor{stroke:#999;stroke-width:.5}',
            '.major{stroke-width:1}',
            '.hour,.major{stroke:#333}',
            '.minute{stroke:#666}',
            '.second,.second-counterweight{stroke:#b40000}',
            '.second-counterweight{stroke-width:3}',
            '</style>',
          '</head>',
          '<body>',
            '<div id="root"></div>',
            '<script src="' + data.main + '"></script>',
          '</body>',
        '</html>'
    ].join('')
  }
}
