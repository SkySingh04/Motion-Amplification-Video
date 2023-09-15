
import React from 'react';
import Navbar from '../components/Navbar';
import 'animate.css/animate.min.css'; // Import Animate.css for animations

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section with Animation */}
      <section className="bg-light text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '0.5s' }}
          >
            Welcome to Motion Amplification
          </h1>
          <p
            className="text-lg md:text-xl lg:text-xl text-gray-600 mb-6 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '1s' }}
          >
            Discover the power of motion amplification in videos across various
            industries and medical applications.
          </p>
          <a
            href="/upload"
            className="bg-dark text-white px-4 py-2 rounded-full text-lg hover-bg-darker transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '1.5s' }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Industries Section with Animation */}
      <section className="bg-default text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h4
            className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '0.5s' }}
          >
            Industries
          </h4>
          <div className=" ml-6 mr-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example industry cards with Animation */}
            <div
              className="bg-light p-4 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDuration: '1s', animationDelay: '1s' }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                Manufacturing
              </h3>
              <p className="text-gray-600">
                Improve quality control and process optimization.
              </p>
            </div>
            <div
              className="bg-light p-4 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDuration: '1s', animationDelay: '1.5s' }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                Construction
              </h3>
              <p className="text-gray-600">
                Optimize construction projects and structural analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Applications Section with Animation */}
      <section className="bg-default text-darker py-8 md:py-10 lg:py-12">
        <div className="container mx-auto text-center">
          <h2
            className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '0.5s' }}
          >
            Medical Applications
          </h2>
          <div className="ml-6 mr-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example medical application cards with Animation */}
            <div
              className="bg-light p-4 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDuration: '1s', animationDelay: '1s' }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                Cardiology
              </h3>
              <p className="text-gray-600">
                Aid in cardiac assessments and patient care.
              </p>
            </div>
            <div
              className="bg-light p-4 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDuration: '1s', animationDelay: '1.5s' }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                Neurology
              </h3>
              <p className="text-gray-600">
                Advance neurology research and diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section with Animation */}
      <section
        id="contact"
        className="bg-light text-darker py-8 md:py-10 lg:py-12"
      >
        <div className="container mx-auto text-center">
          <h2
            className="text-2xl md:text-2xl lg:text-xl font-semibold mb-6 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '0.5s' }}
          >
            Contact Us
          </h2>
          <p
            className="text-lg md:text-xl lg:text-lg text-gray-600 mb-6 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '1s' }}
          >
            Have questions or need assistance? We're here to help.
          </p>
          <a
            href="#contact"
            className="bg-dark text-lg text-white px-4 py-2 rounded-full hover-bg-darker transition duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeInUp"
            style={{ animationDuration: '1s', animationDelay: '1.5s' }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-darker text-darker py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl lg:text-2xl">
            &copy; 2023 Motion Amplification
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

