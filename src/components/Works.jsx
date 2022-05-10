import React from 'react';
import works from '../data/works';
import Link from './Link';
import SectionTitle from './SectionTitle';
import WorksItem from './WorksItem';

function Works() {
	return (
		<div className="py-12">
			<SectionTitle id="works">Recent Works </SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{works.map(work => (
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
				<Link
					href="https://github.com/shaifarfan"
					target="_blank"
					rel="noreferrer"
				>
					more in GitHub...
				</Link>
			</div>
		</div>
	);
}

export default Works;
