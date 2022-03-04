import React from "react";
import pic from "../static/guitar.jpg";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Amit.
            <br className="hidden lg:inline-block" />I love building amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Software Engineer, Highly motivated, quick learner, autodidact
            and a problem solver. Excited about Software and Tech in general and
            kind of a geek.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Past Works
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={pic}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
