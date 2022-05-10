import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Links from './pages/links';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌞' : '🌙'}
			</button>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/links" element={<Links />} />
			</Routes>
		</>
	);
}

export default App;
