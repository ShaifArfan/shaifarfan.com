import Link from './Link';

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-[50px] md:flex-row md:gap-20 md:py-[150px]">
      <img
        src="https://avatars.githubusercontent.com/u/38496311?v=4"
        alt="Arfan"
        className=" w-full max-w-[300px] rounded-full object-cover md:w-6/12"
      />

      <div className="w-full text-center md:w-6/12 md:text-left">
        <h1 className="text-2xl font-semibold text-brand-600 md:text-4xl">
          Hi, I&apos;m Shaif Arfan
        </h1>
        <p className="mt-3 font-inter text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Experienced Web Developer and Educator
        </p>
        <p className=" mt-3 text-base text-gray-600 dark:text-gray-400">
          <span>
            Welcome to my portfolio! I specialize in crafting innovative
            solutions with comprehensive full-stack expertise in JavaScript and
            top-tier framework utilization.
          </span>
          <span className="mt-2 block">
            Additionally, I&apos;m passionate about sharing my knowledge in web
            development through instructional content on the{' '}
            <Link
              href="https://youtube.com/webcifarOfficial"
              target="_blank"
              className="text-inherit"
            >
              Web Cifar YouTube Channel
            </Link>
            .
          </span>
          <span className="mt-2 block">
            Explore my works, and let&apos;s collaborate to bring your ideas to
            life!
          </span>
          <span className="mt-2 block">
            Reach me at{' '}
            <Link href="mailto:shaifarfan08@gmail.com">
              shaifarfan08@gmail.com
            </Link>
          </span>
        </p>

        <div className="mt-1 block " />

        <div className="mt-5 flex justify-center gap-3 md:justify-start">
          <a href="#works">
            <button className="primary-btn" type="button">
              See My Works
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
