import React from 'react';
// import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = ({ setDarkMode, darkMode }) => {
	// const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className='navbar'>
			<h1>Crypto Tracker</h1>
			<div className='toggle__container'>
				<div
					className='dark-mode__toggle'
					name='toggle'
					id='toggle'
					onClick={toggleMode}
				>
					<div className={darkMode ? 'toggle toggled' : 'toggle'} />
				</div>
				<label htmlFor='toggle' className='toggle__label'>
					{darkMode ? 'Light' : 'Dark'}
				</label>
			</div>
		</nav>
	);
};

export default Navbar;
