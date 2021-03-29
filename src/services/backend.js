export default async function getStockInfo(symbol, type) {
	let requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ symbol: symbol, type: type }),
	};
	let results = await fetch('/stocks', requestOptions).then(function (res) {
		return res.json();
	});

	return results;
}
