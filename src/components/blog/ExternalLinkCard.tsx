import { useState } from 'react';

import YouTubeLogo from '../../assets/icons/yt-logo.svg';
import GitHubLogo from '../../assets/icons/GitHub.svg';

const logoData = {
  youTube: YouTubeLogo,
  github: GitHubLogo,
};
interface Props {
  title: string;
  description?: string;
  link: string;
  logo: keyof typeof logoData;
}

export default function ExternalLinkCard({
  logo,
  link,
  description,
  title,
}: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>();

  const copyLink = () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    navigator.clipboard.writeText(link);
    setIsCopied(true);

    const id = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setTimeOutId(id);
  };

  return (
    <div className="not-prose mx-auto my-10 flex max-w-[820px] flex-col items-center gap-5 rounded-2xl bg-slate-300 p-9 dark:bg-[#0A1321] md:flex-row md:gap-8">
      <div className="flex-1 text-center md:text-left">
        <div className="mx-auto w-max rounded-md bg-white p-1 md:ml-0">
          <img
            src={logoData[logo].src}
            color="white"
            className="mx-auto h-6 md:ml-0"
            alt="Logo"
            loading="lazy"
          />
        </div>
        <h3 className="my-3 text-2xl font-semibold">{title}</h3>
        <p className="text-sm">
          {description ||
            `I have also created a video tutorial on this blog. Check it out if you prefer video content`}
        </p>
      </div>
      <div className="h-[1px] w-[75%] bg-brand-700 md:h-[90px] md:w-[1px]" />
      <div className="flex-1 text-center">
        <p className="md:text-md mb-4 font-semibold md:text-xl">{link}</p>
        <div className="flex flex-col gap-3 md:flex-row md:gap-2">
          <a href={link} target="_blank" className="md:flex-1" rel="noreferrer">
            <button
              type="button"
              className="secondary-btn w-full border-[1px] text-sm"
            >
              Open Link 🔗
            </button>
          </a>
          <div className="md:flex-1">
            <button
              type="button"
              className="secondary-btn copy-link w-full border-[1px] text-sm"
              onClick={copyLink}
            >
              {isCopied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
