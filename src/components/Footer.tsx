import { siteInfo } from '~/data/site-info';

function Footer() {
  return (
    <div className="layout-container rounded-t-lg bg-slate-300 py-5 text-center text-gray-800 dark:bg-slate-900 dark:text-gray-300">
      <a href="/" className="block text-xl font-semibold md:text-2xl">
        Shaif Arfan
      </a>
      <a
        href="mailto:webcifar@gmail.com"
        className="font-regular md:text-md text-sm hover:text-indigo-500"
      >
        shaifarfan08@gmail.com
      </a>
      <ul
        className="flex items-center justify-center gap-2 py-3"
        aria-label="Social Links"
      >
        {siteInfo.socialLinks.map((link) => (
          <li key={link.href} className="text-xl">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              title={link.platform}
              aria-label={link.text}
            >
              <link.icon aria-label={`${link.platform} Icon`} />
            </a>
          </li>
        ))}
      </ul>
      <p className="font-regular mt-2 text-sm text-gray-500">
        © shaifarfan.com {new Date().getFullYear()}. All rights reserved
      </p>
      <a
        href="/privacy-policy"
        className="font-regular mt-2 text-sm text-gray-500"
      >
        privacy policy 🔒
      </a>
    </div>
  );
}

export default Footer;
