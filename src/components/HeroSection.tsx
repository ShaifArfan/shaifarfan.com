import React from 'react';

function HeroSection() {
  return (
    <>
      <h1>site: {import.meta.env.SITE}</h1>
      <h1>env: {import.meta.env.MODE}</h1>
      <h1>context: {import.meta.env.CONTEXT}</h1>
      <h1>URL: {import.meta.env.URL}</h1>
      <div
        id="hero"
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="text-center">
          <h1 className="mb-1 text-2xl font-semibold text-indigo-600 dark:text-indigo-500 md:mb-3 md:text-4xl">
            Hi👋, This is Arfan
          </h1>
          <p className="text-md mb-3 max-w-md font-inter text-gray-600 dark:text-gray-300 md:text-xl">
            a web developer and a teacher
          </p>
          <a
            href="#works"
            className="md:text-md inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-inter text-base font-medium text-white hover:bg-indigo-700 md:px-8 md:py-3"
          >
            See Works
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
