import React from 'react';
import moment from 'moment';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const Chart = ({ sparklineData, darkMode }) => {
	const formattedData = sparklineData
		.map((price, idx) => {
			if (idx % 6 === 0) {
				const timeToSubtract = 168 - idx;
				const date = moment()
					.subtract(timeToSubtract, 'hours')
					.format('ddd h:mma');
				return { value: price, date };
			} else if (idx === sparklineData.length - 1) {
				const date = moment().format('ddd h:mma');
				return { value: price, date };
			}
			return null;
		})
		.filter((data) => data);

	return (
		<ResponsiveContainer width='90%' height={200}>
			<LineChart data={formattedData}>
				<Line
					type='monotone'
					dataKey='value'
					stroke={darkMode ? '#8884d8' : '#f68819'}
				/>
				<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
				<XAxis dataKey='date' interval={3} />
				<YAxis />
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
