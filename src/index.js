import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useCurrency } from './hooks/useCurrency';
import { useDarkMode } from './hooks/useDarkMode';

import Charts from './components/Charts';
import Navbar from './components/Navbar';

import './styles.scss';

const App = () => {
	const [coinData, setCoinData] = useState([]);
	const [page, setPage] = useState(1);
	const [currency, setCurrency, curSign] = useCurrency('usd');
	const [darkMode, setDarkMode] = useDarkMode(false);

	const handleCurrencyChange = (e) => {
		setCurrency(e.target.value);
	};

	const handlePageInc = () => {
		setPage(page + 1);
	};
	const handlePageDec = () => {
		setPage(page - 1);
	};

	useEffect(() => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=true`
			)
			.then((res) => {
				setCoinData(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err));
	}, [page, currency]);
	return (
		<div className='App'>
			<Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
			<Charts coinData={coinData} curSign={curSign} darkMode={darkMode} />
			<div className='btn-container'>
				<select
					className='currency-select'
					value={currency}
					onChange={handleCurrencyChange}
				>
					<option value='usd'>US Dollars</option>
					<option value='eur'>Euro</option>
					<option value='rub'>Russian Rubble</option>
					<option value='idr'>Indonesian Rupiah</option>
					<option value='krw'>S. Korean Won</option>
					<option value='cny'>Chinese Yuan</option>
					<option value='jpy'>Japanese Yen</option>
				</select>
				<button
					className='btn btn-prev'
					onClick={handlePageDec}
					disabled={page === 1 ? true : false}
				>
					Prev
				</button>
				<button
					className='btn btn-next'
					onClick={handlePageInc}
					disabled={page === 587 ? true : false}
				>
					Next
				</button>
			</div>
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
