import React from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
}

function SectionTitle({ children, id }: Props) {
  return (
    <h1
      id={id && id}
      className="text-3xl font-bold text-slate-700 dark:text-slate-300"
    >
      {children}
    </h1>
  );
}

export default SectionTitle;
