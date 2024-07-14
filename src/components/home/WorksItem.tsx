import React from 'react';
import Link from '../Link';

interface Props {
  imgUrl: string;
  title: string;
  tech: string[];
  detailsLink: string;
}

function WorksItem({ imgUrl, title, tech, detailsLink }: Props) {
  return (
    <div className="overflow-hidden rounded-lg bg-slate-300 dark:bg-slate-900">
      <img
        src={imgUrl}
        alt="work"
        className="h-36 w-full object-cover md:h-48"
      />
      <div className="w-full p-5 text-gray-600 dark:text-gray-300">
        <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
          {title}
        </h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block rounded-md bg-slate-200 px-2 py-1 dark:bg-slate-800"
            >
              {item}
            </span>
          ))}
        </p>
        <div className="mt-3 cursor-pointer">
          <Link href={detailsLink} target="_blank" rel="noreferrer">
            Details 🔗
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorksItem;
