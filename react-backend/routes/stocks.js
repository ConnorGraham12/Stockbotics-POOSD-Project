var yahooFinance = require('yahoo-finance');
var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

express().use(bodyParser.urlencoded({ extended: false }));
express().use(bodyParser.json());

const curDate = new Date();
const prevDate = new Date(curDate.getDate() - 7);

/* GET users listing. */
router.post('/', function (req, res, next) {
	if (req.body.type == 'historical') {
		yahooFinance.historical(
			{
				symbol: req.body.symbol,
				from: prevDate,
				to: curDate,
				period: 'd',
			},
			function (err, quotes) {
				res.json(quotes);
			}
		);
	} else {
		yahooFinance.quote(
			{
				symbol: req.body.symbol,
				modules: ['price', 'summaryDetail'],
			},
			function (err, quotes) {
				res.json(quotes);
			}
		);
	}
});

module.exports = router;
