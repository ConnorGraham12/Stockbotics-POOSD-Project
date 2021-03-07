var yahooFinance = require('yahoo-finance');
var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

express().use(bodyParser.urlencoded({ extended: false }));
express().use(bodyParser.json());

/* GET users listing. */
router.post('/', function (req, res, next) {
	// Comment out this line:
	//res.send('respond with a resource');

	// And insert something like this instead:
	yahooFinance.quote(
		{
			symbol: req.body.symbol,
			modules: ['price', 'summaryDetail'], // see the docs for the full list
		},
		function (err, quotes) {
			// ...

			res.json(quotes);
		}
	);
});

module.exports = router;
