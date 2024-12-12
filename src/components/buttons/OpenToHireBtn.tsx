import React from 'react';

interface OpenToHireBtnProps {
  children: React.ReactNode;
}

function OpenToHireBtn({ children }: OpenToHireBtnProps) {
  return (
    <div className="group flex items-center gap-2 rounded-lg border-2 border-emerald-600 bg-emerald-600 bg-opacity-[.1] px-5 py-2 text-base font-medium transition-colors duration-300 ease-in-out hover:bg-opacity-100 hover:text-white dark:border-emerald-700 dark:bg-emerald-700 dark:bg-opacity-[.1] dark:hover:bg-opacity-100">
      <span className="h-[.6em] w-[.6em] rounded-[50%] bg-emerald-500 group-hover:bg-emerald-200" />
      <p className="text-emerald-700 group-hover:text-white dark:text-white">
        {children}
      </p>
    </div>
  );
}

export default OpenToHireBtn;
