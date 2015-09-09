#Let's React

```
npm install
npm start
open http://localhost:3000
```

to make file edition work, you need to modify `webpack-dev-server`. I know it's very hacky, but it's simpler this way.

In `node_modules/webpack-dev-server/lib/Server.js` after `app` creation (line 55), just add the last line of the following snippet :

```javascript
// Init express server
var app = this.app = new express();

// serve webpack bundle
app.use(this.middleware = webpackDevMiddleware(compiler, options));

// here, add the following line :
(options.enhanceApp || function() {})(app);
```
