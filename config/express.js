var express = require('express')
	,steam   = require('steam-login')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes');

app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));

app.use(steam.middleware({
	realm: 'http://localhost:3000/', 
    verify: 'http://localhost:3000/verify',
    apiKey: '594357F8149E7A13438EBCC29B244737'
}))

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;