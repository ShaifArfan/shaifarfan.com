import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function Link({ children, href, className, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={` text-gray-700 underline decoration-1 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-500  ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
