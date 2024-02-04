import React from 'react';
import Link from './Link';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          My name is <span className="font-bold">Shaif Arfan</span> and I&apos;m
          a web developer. I also teach web development at{' '}
          <Link href="https://youtube.com/webcifarOfficial" target="_blank">
            Web Cifar YouTube
          </Link>{' '}
          Channel.
        </p>
        <div className="block mt-3 ">
          <Link href="mailto:shaifarfan08@gmail.com">
            shaifarfan08@gmail.com
          </Link>
        </div>
      </div>

      <img
        src="https://avatars.githubusercontent.com/u/38496311?v=4"
        alt="Arfan"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
