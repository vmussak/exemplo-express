const 	express = require('express'),
		errors = require('./middlewares/error'),
		auth = require('./middlewares/auth'),
		load = require('express-load');
var app = express();

app.listen(5000, () => {
	console.log('Server running! :D');
});

app.use(auth.isAuthenticated);
load('controllers').then('routes').into(app);
app.use(errors.notFound);