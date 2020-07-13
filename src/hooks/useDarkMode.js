import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (bool) => {
	const [darkMode, setDarkMode] = useLocalStorage('dark', bool);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [darkMode]);

	return [darkMode, setDarkMode];
};
