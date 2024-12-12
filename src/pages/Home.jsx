import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-600 text-black'}`}>
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
      {/* ලිංගික සෞඛ්‍ය */}
      <Link to="/Sexual_health" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_security_image.jpg" // Replace with your image source
            alt="Security Practices"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ලිංගික සෞඛ්‍ය</h4>
      </Link>

      {/* කැමැත්ත */}
      <Link to="/Consent" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_worship_image.jpg" // Replace with your image source
            alt="Right to Worship"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">කැමැත්ත</h4>
      </Link>

      {/* ආරක්ෂිත පිළිවෙත් */}
      <Link href="/Safe_practices" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="/sf.jsx" // Replace with your image source
            alt="Health and Hygiene"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ආරක්ෂිත පිළිවෙත්</h4>
      </Link>

      {/* ප්‍රජනක අයිතිය */}
      <Link href="/Reproductiverights" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_screening_image.jpg" // Replace with your image source
            alt="Confidential Screening"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ප්‍රජනක අයිතිය</h4>
      </Link>

      {/*ගෞරනනීය සන්නිවේදනය */}
      <Link href="/Respectful_communication" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_counseling_image.jpg" // Replace with your image source
            alt="Sexual Health Counseling"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ගෞරනනීය සන්නිවේදනය</h4>
      </Link>

      {/* ඔසප් සෞඛ්‍ය හා සනීපාරක්ෂාව */}
      <Link href="/MenstrualHealthandHygiene" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_discussions_image.jpg" // Replace with your image source
            alt="Open Discussions with Parents"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ඔසප් සෞඛ්‍ය හා සනීපාරක්ෂාව</h4>
      </Link>

      {/* සිසුන් සදහා රහස්‍ය පරීක්ෂණ සහ උපදෙස් සේවාව */}
      <Link href="/Confidential_Screenings_and_Counseling_Services_for_Students" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_mental_health_image.jpg" // Replace with your image source
            alt="Mental Health Support"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">සිසුන් සදහා රහස්‍ය පරීක්ෂණ සහ උපදෙස් සේවාව</h4>
      </Link>

      {/*ලිංගික සෞඛ්‍ය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීම*/}
      <Link href="/Seeking_Advice_on_Sexual_Health_Matters" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_youth_image.jpg" // Replace with your image source
            alt="Youth Contributions"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ලිංගික සෞඛ්‍ය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීම</h4>
      </Link>


          {/*දෙමාපියන් සහ ප්‍රජාව සමඟ විවෘත සාකච්ඡා*/}
          <Link href="/Open_Discussions_with_parents_and_the_community" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_youth_image.jpg" // Replace with your image source
            alt="Youth Contributions"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">දෙමාපියන් සහ ප්‍රජාව සමඟ විවෘත සාකච්ඡා</h4>
      </Link>



          {/*ලිංගිකත්වය හා සම්බන්ධ මානසික යහපැවැත්ම*/}
          <Link href="/mental_well_being_related_to_Sexually" className="group text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <img
            src="path_to_youth_image.jpg" // Replace with your image source
            alt="Youth Contributions"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="mt-2 text-lg font-semibold group-hover:text-gray-700">ලිංගිකත්වය හා සම්බන්ධ මානසික යහපැවැත්ම</h4>
      </Link>
      </div>
    {/* <p className="mt-4 text-lg">
      The digital learning module provides an engaging, self-paced experience where students can access information about sexual and reproductive health in a safe and supportive environment.
    </p>
    <p className="mt-4 text-lg font-medium">
      This project is designed to be presented in a 10-minute digital learning module, addressing key aspects of sexual and reproductive health.
    </p> */}
  </div>
</section>
</div>
  );
};

export default HomePage;
