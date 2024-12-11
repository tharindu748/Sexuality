import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from local storage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-300 text-black'}`}>
      {/* Navbar */}
      <nav className="p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* <div className="text-2xl font-semibold">Sexuality Project</div> */}

          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="text-yellow-300 p-2 rounded-full bg-gray-600 hover:bg-gray-500"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m12 0a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m6 0a6 6 0 11-6 6 6 6 0 016-6z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Sexual and Reproductive Health Awareness</h1>
          <p className="mt-4 text-xl">
            A Comprehensive Digital Learning Module for Young Adults (Ages 20-27)
          </p>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-8 px-4 bg-white">
  <div className="max-w-screen-xl mx-auto text-center text-gray-800">
    {/* <h2 className="text-3xl font-semibold">Our Group Project</h2>
    <p className="mt-4 text-lg">
      Our faculty has developed a comprehensive sexual and reproductive health awareness project for young adults (ages 20-27).
      The project is a digital learning module designed to educate young adults about the essential aspects of sexual and reproductive health.
    </p> */}

    <h3 className="text-2xl font-medium mt-6">Key Topics Covered</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
      {/* Security Practices */}
      <a href="#security-practices" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_security_image.jpg" // Replace with your image source
            alt="Security Practices"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Security Practices</h4>
      </a>

      {/* Right to Worship */}
      <a href="#right-to-worship" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_worship_image.jpg" // Replace with your image source
            alt="Right to Worship"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Right to Worship</h4>
      </a>

      {/* Health and Hygiene */}
      <a href="#health-and-hygiene" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_health_image.jpg" // Replace with your image source
            alt="Health and Hygiene"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Health and Hygiene</h4>
      </a>

      {/* Confidential Screening */}
      <a href="#confidential-screening" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_screening_image.jpg" // Replace with your image source
            alt="Confidential Screening"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Confidential Screening</h4>
      </a>

      {/* Counseling on Sexual Health */}
      <a href="#sexual-health-counseling" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_counseling_image.jpg" // Replace with your image source
            alt="Sexual Health Counseling"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Sexual Health Counseling</h4>
      </a>

      {/* Open Discussions with Parents */}
      <a href="#open-discussions" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_discussions_image.jpg" // Replace with your image source
            alt="Open Discussions with Parents"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Open Discussions with Parents</h4>
      </a>

      {/* Mental Health Support */}
      <a href="#mental-health-support" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_mental_health_image.jpg" // Replace with your image source
            alt="Mental Health Support"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Mental Health Support</h4>
      </a>

      {/* Youth Contributions */}
      <a href="#youth-contributions" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_youth_image.jpg" // Replace with your image source
            alt="Youth Contributions"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">Youth Contributions</h4>
      </a>
    </div>

    {/* <p className="mt-4 text-lg">
      The digital learning module provides an engaging, self-paced experience where students can access information about sexual and reproductive health in a safe and supportive environment.
    </p>
    <p className="mt-4 text-lg font-medium">
      This project is designed to be presented in a 10-minute digital learning module, addressing key aspects of sexual and reproductive health.
    </p> */}
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2024 Sexuality Health Awareness Project | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
