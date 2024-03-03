import React from 'react';
import TopHeader from './TopHeadert';

function Header() {
  return (
    <div className="border-b-[1px] border-slate-200 dark:border-slate-800">
      <div className="layout-container">
        <TopHeader />
      </div>
    </div>
  );
}

export default Header;
