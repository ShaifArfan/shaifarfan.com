import React from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
}

function SectionTitle({ children, id }: Props) {
  return (
    <h1 id={id && id} className="title-color text-3xl font-bold">
      {children}
    </h1>
  );
}

export default SectionTitle;
