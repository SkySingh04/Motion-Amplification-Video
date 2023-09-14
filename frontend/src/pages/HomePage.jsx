import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-light text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 md:mb-3">
            Welcome to Motion Amplification
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-3 md:mb-4">
            Discover the power of motion amplification in videos across various
            industries and medical applications.
          </p>
          <a
            href="#contact"
            className="bg-dark text-white px-2 py-1 rounded-full text-sm md:text-base lg:text-lg hover-bg-darker transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-default text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
            Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Example industry cards */}
            <div className="bg-light p-2 md:p-3 rounded-lg shadow-lg">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                Manufacturing
              </h3>
              <p className="text-gray-600 text-xxs md:text-xs">
                Improve quality control and process optimization.
              </p>
            </div>
            {/* <div className="bg-light p-2 md:p-3 rounded-lg shadow-lg">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                Healthcare
              </h3>
              <p className="text-gray-600 text-xxs md:text-xs">
                Enhance medical diagnostics and research.
              </p>
            </div> */}
            <div className="bg-light p-2 md:p-3 rounded-lg shadow-lg">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                Construction
              </h3>
              <p className="text-gray-600 text-xxs md:text-xs">
                Optimize construction projects and structural analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Applications Section */}
      <section className="bg-default text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
            Medical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Example medical application cards */}
            <div className="bg-light p-2 md:p-3 rounded-lg shadow-lg">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                Cardiology
              </h3>
              <p className="text-gray-600 text-xxs md:text-xs">
                Aid in cardiac assessments and patient care.
              </p>
            </div>
            <div className="bg-light p-2 md:p-3 rounded-lg shadow-lg">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
                Neurology
              </h3>
              <p className="text-gray-600 text-xxs md:text-xs">
                Advance neurology research and diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-light text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
            Contact Us
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-3 md:mb-4">
            Have questions or need assistance? We're here to help.
          </p>
          <a
            href="#contact"
            className="bg-dark text-white px-2 py-1 rounded-full text-sm md:text-base lg:text-lg hover:bg-darker transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-darker text-darker py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-xxs md:text-xs lg:text-sm">&copy; 2023 Motion Amplification</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;