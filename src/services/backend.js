export default async function getStockInfo(symbol) {
	let requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ symbol: symbol }),
	};

	const results = await fetch('/stocks', requestOptions);
	const stocks = await results.json();


	return stocks;
}
