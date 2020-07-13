// import {useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useCurrency = (cur) => {
	const [currency, setCurrency] = useLocalStorage('currency', cur);
	const curSign = getCurrencyType(currency);
	return [currency, setCurrency, curSign];
};

const getCurrencyType = (currency) => {
	if (currency === 'usd') {
		return '$';
	} else if (currency === 'eur') {
		return '€';
	} else if (currency === 'won') {
		return '₩';
	} else if (currency === 'rub') {
		return '₽';
	} else if (currency === 'jpy' || currency === 'cny') {
		return '¥';
	} else if (currency === 'idr') {
		return '₨';
	}
};
