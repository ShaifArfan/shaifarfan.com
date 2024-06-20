import { siteInfo } from '~/data/site-info';
import Link from './Link';

function Footer() {
  return (
    <div className="layout-container rounded-t-lg bg-slate-800 py-5 text-center text-gray-300">
      <a href="/" className="block text-xl font-semibold md:text-2xl">
        Shaif Arfan
      </a>
      <a
        href="mailto:webcifar@gmail.com"
        className="font-regular md:text-md text-sm hover:text-indigo-500"
      >
        shaifarfan08@gmail.com
      </a>
      <ul className="flex items-center justify-center gap-2 py-3">
        {siteInfo.socialLinks.map((link) => (
          <li key={link.href} className="text-xl" aria-label={link.text}>
            <Link href={link.href} target="_blank">
              <link.icon />
            </Link>
          </li>
        ))}
      </ul>
      <p className="font-regular mt-2 text-sm text-gray-500">
        © shaifarfan.com {new Date().getFullYear()}. All rights reserved
      </p>
      <Link
        href="/privacy-policy"
        className="font-regular mt-2 text-sm text-gray-500"
      >
        privacy policy 🔒
      </Link>
    </div>
  );
}

export default Footer;
