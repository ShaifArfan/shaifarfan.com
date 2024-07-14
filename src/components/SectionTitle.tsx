import React from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
}

function SectionTitle({ children, id }: Props) {
  return (
    <h1
      id={id && id}
      className="text-3xl font-bold text-indigo-600 dark:text-indigo-500"
    >
      {children}
    </h1>
  );
}

export default SectionTitle;
