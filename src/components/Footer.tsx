import { siteInfo } from '~/data/site-info';
import Link from './Link';

function Footer() {
  return (
    <div className="layout-container rounded-t-lg bg-slate-800 py-5 text-center text-gray-300">
      <a href="#hero" className="block text-xl font-semibold md:text-2xl">
        Shiaf Arfan
      </a>
      <a
        href="mailto:webcifar@gmail.com"
        className="font-regular md:text-md text-sm hover:text-indigo-500"
      >
        shaifarfan08@gmail.com
      </a>
      <ul className="flex items-center justify-center gap-2 py-3">
        {siteInfo.socialLinks.map((link) => (
          <li key={link.href} className="text-xl">
            <Link href={link.href} target="_blank" aria-label={link.text}>
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
      <p className="font-regular mt-2 text-xs text-gray-500">
        © shaifarfan.com {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
