import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/hero_img.jpg";

const Hero = () => {
  return (
    <section className="mt-6 rounded-2xl bg-gray-100 px-6 py-10 md:px-12 lg:px-16">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">

        {/* Left Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <Link
            to="/listed-books"
            className="mt-6 inline-block rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:bg-amber-300 hover:shadow-md"
          >
            View The List
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={heroImage}
            alt="Featured book"
            className="h-64 w-auto object-contain md:h-72"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;