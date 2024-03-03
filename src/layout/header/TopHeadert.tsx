import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Link from '~/components/Link';
import ThemeSwitcher from '~/components/ThemeSwitcher';
import { siteInfo } from '~/data/site-info';

function TopHeader() {
  return (
    <div className="flex flex-col justify-between gap-3 py-2 md:flex-row">
      <Link
        href={`mailto:${siteInfo.email}`}
        className="flex items-center justify-center gap-2 text-base text-slate-500 dark:text-slate-500"
      >
        <span>
          <FaEnvelope />
        </span>
        {siteInfo.email}
      </Link>
      <div className="flex items-center justify-center gap-3 md:justify-between ">
        <ul className="flex gap-2 ">
          {siteInfo.socialLinks.map((link) => (
            <li key={link.href} className="text-xl ">
              <Link
                href={link.href}
                target="_blank"
                aria-label={link.text}
                className="text-slate-500 dark:text-slate-500"
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-[1em] w-[1px] bg-gray-500" />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default TopHeader;
