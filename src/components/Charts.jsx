import React from 'react';
import Chart from './Chart';

const Charts = ({ coinData, curSign, darkMode }) => {
	return (
		<div className='charts'>
			{coinData.map((coin) => (
				<div className='chart__container' key={coin.name}>
					<div className='chart-header'>
						<h2 className='coin__title'>{coin.name}</h2>
						<h3 className='coin__price'>
							Current Price: {`${curSign}${coin.current_price}`}
						</h3>
						<h4 className='coin__symbol'>{coin.symbol}</h4>
						<div className='coin__logo'>
							<img src={coin.image} height='40' alt={coin.name} />
						</div>
					</div>
					<Chart
						sparklineData={coin.sparkline_in_7d.price}
						darkMode={darkMode}
					/>
				</div>
			))}
		</div>
	);
};
export default Charts;
