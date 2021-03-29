import React, { useCallback, useEffect, useRef } from 'react';
import Chart from 'chart.js';

const createColor = (symbol) => {
	var hash = 0;
	if (symbol.length === 0) return hash;
	for (var i = 0; i < symbol.length; i++) {
		hash = symbol.charCodeAt(i) + ((hash << 5) - hash);
		hash = hash & hash;
	}
	var color = '#';
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 255;
		color += ('00' + value.toString(16)).substr(-2);
	}
	return color;
};

class DoughnutChart extends React.Component {
	constructor(props) {
		super(props);
		this.chartRef = React.createRef();
	}

	componentDidUpdate() {
		this.myChart.data.labels = this.props.data.map((d) => d.symbol);
		this.myChart.data.datasets[0].data = this.props.data.map((d) => d.shares);
		this.myChart.data.datasets[0].backgroundColor = this.props.data.map((d) => createColor(d.symbol.toString()));
		this.myChart.update();
	}

	componentDidMount() {
		this.myChart = new Chart(this.chartRef.current, {
			type: 'doughnut',
			data: {
				labels: this.props.data.map((d) => d.symbol),
				datasets: [
					{
						data: this.props.data.map((d) => d.shares),
						backgroundColor: this.props.data.map((d) => createColor(d.symbol.toString())),
					},
				],
			},
		});
	}

	render() {
		return <canvas ref={this.chartRef} />;
	}
}

export default DoughnutChart;
