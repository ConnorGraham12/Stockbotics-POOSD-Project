export default async function getStockInfo(symbol) {
	let requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ symbol: symbol }),
	};
	let results = await fetch('/stocks', requestOptions).then(function (res) {
		return res.json();
	});

	return results;
}
