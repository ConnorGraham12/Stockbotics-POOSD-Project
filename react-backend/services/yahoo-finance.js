import yahooFinance from 'yahoo-finance2';

async function getQuote(symbol) {
	const result = await yahooFinance.quote(symbol);
	return result;
}
