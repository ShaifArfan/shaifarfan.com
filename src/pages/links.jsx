import React from 'react';
import Link from '../components/Link';

export default function Links() {
	return (
		<div className="bg-white dark:bg-slate-900 min-h-screen font-inter grid place-content-center">
			<div className="max-w-5xl w-full ">
				<div className="links_wrapper">
					<h1 className="text-xl md:text-3xl mb-3 text-gray-700  dark:text-gray-300 font-bold">
						Important Links
					</h1>
					<ol className="flex flex-col gap-2 list-decimal text-gray-700 dark:text-gray-300 ml-4">
						<li>
							<Link
								href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ"
								target="_blank"
								rel="noreferrer"
							>
								YouTube Channel
							</Link>
						</li>
						<li>
							<Link
								href="https://shaifarfan.com"
								target="_blank"
								rel="noreferrer"
							>
								Website
							</Link>
						</li>
						<li>
							<Link
								href="https://facebook.com/fb.shaifarfan08"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</Link>
						</li>
						<li>
							<Link
								href="https://twitter.com/shaifarfan08"
								target="_blank"
								rel="noreferrer"
							>
								Twitter
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/shaifarfan"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</Link>
						</li>
						<li>
							<Link
								href="https://instagram.com/shaifarfan08"
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</Link>
						</li>
						<li>
							<Link
								href="mailto:shaifarfan08@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								Email-me
							</Link>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}
