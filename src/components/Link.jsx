import React from 'react';

function Link({ children, href, className, ...props }) {
	return (
		<a
			href={href}
			className={`text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500 ${className}`}
			{...props}
		>
			{children}
		</a>
	);
}

export default Link;
