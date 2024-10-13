import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p
            className="text-zinc-300 mb-4 md:mb-8 
                md:text-xl md:max-w-[60ch]"
          >
            <span className="font-bold ">Enable Innovations</span> empowers
            organizations by crafting innovative web applications and mobile
            apps designed to fuel global growth. We combine cutting-edge
            technology with tailored solutions to drive digital transformation,
            streamline processes, and expand market reach, helping businesses
            thrive in the ever-evolving digital landscape.
          </p>
          <div
            className="flex flex-wrap items-center gap-4
                md:gap-7"
          >
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2 md:text-4xl">
                  <span className="text-2xl font-semibold ">{number}</span>
                  <span className="text-white font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            
            <a
              href="#services"
              className="logo reveal-up flex flex-col items-center ml-auto md:w-[px] md:h-[32px] mb-1 md:mb-6 hidden md:flex"
            >
              <img
                src="/images/logo_123.png"
                width={20}
                height={20}
                alt="Logo"
                className="mb-1"
              />
              <span className="text-xs text-zinc-400 ">Scroll Down</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
