import React from 'react';
import Chart from './Chart';

const Charts = ({ coinData, curSign, darkMode }) => {
	return (
		<div className='charts'>
			{coinData.map((coin) => (
				<div className='chart__container' key={coin.name}>
					<div className='chart-header'>
						<div className='coin__title-container'>
							<h2 className='coin__title'>{coin.name}</h2>
							<h4 className='coin__symbol'>{coin.symbol}</h4>
						</div>
						<div>
							<h2>Current Price:</h2>
							<h3 className='coin__price'>{`${curSign}${coin.current_price}`}</h3>
						</div>

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
