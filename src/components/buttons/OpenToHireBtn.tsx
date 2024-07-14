import React from 'react';

interface OpenToHireBtnProps {
  children: React.ReactNode;
}

function OpenToHireBtn({ children }: OpenToHireBtnProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg border-2 border-emerald-600 bg-emerald-600 bg-opacity-[.12] px-5 py-2 text-base font-medium text-emerald-600 transition-colors duration-300 ease-in-out hover:bg-opacity-100 hover:text-white dark:bg-opacity-[.2] dark:text-white dark:hover:bg-opacity-100"
    >
      <span className="h-[.6em] w-[.6em] rounded-[50%] bg-emerald-400" />
      {children}
    </button>
  );
}

export default OpenToHireBtn;
