import React, { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

function ThemeSwitcher() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme;
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <button
      type="button"
      // className="fixed right-2 top-2 z-10 rounded-md bg-indigo-500 p-1 text-lg"
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeSwitcher;
