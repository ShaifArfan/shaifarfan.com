import React from 'react';
import works from '../../data/works';
import SectionTitle from '../SectionTitle';
import WorksItem from './WorksItem';

function Works() {
  return (
    <div className="py-12">
      <div className="mb-5">
        <SectionTitle id="works">Recent Works </SectionTitle>
        <p className="mt-2 max-w-[500px] text-base text-gray-600 dark:text-gray-400">
          This list includes both my personal and professional projects,
          showcasing my expertise in developing dynamic web applications using
          JavaScript and React.js.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {works.map((work) => (
          <WorksItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            detailsLink={work.detailsLink}
          />
        ))}
      </div>
      <div className="mt-5">
        <a
          href="https://github.com/shaifarfan"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          more on GitHub...
        </a>
      </div>
    </div>
  );
}

export default Works;
