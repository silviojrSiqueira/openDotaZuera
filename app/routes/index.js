var path = require('path');
var steam = require('steam-login');
var steamConvertor = require('steam-id-convertor');

module.exports  = function(app) {
 
	app.get('/authenticate', steam.authenticate(), function(req, res) {
	    //res.redirect('/');
	});
	 
	app.get('/verify', steam.verify(), function(req, res) {
		var steamid64 = req.user.steamid;
		var steamid32 = steamConvertor.to32(steamid64);
		res.redirect('/players/' + steamid32);
	    //res.send(req.user.steamid).end();

	});
	 
	app.get('/logout', steam.enforceLogin('/'), function(req, res) {
	    req.logout();
	    res.clearCookie('connect.sid', { path: '/' });
	    res.redirect('/');
	});
    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};