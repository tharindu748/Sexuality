import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReproductiveRights from './image/reproductive_right.png';
import Sexual_health from './image/Sexual_health.png';
import Menstrual_health from './image/Menstrual_health.png';
import Mental_well_being from './image/Mental_well_being.png';
import Seeking_Advice_on_Sexual from './image/Seeking_Advice_on_Sexual.png';
import Confidential_S from './image/Counseling_Services_for_Students.png';
import Open_Discussions_with_parents_and_the_community from './image/Open_Discussions.png';
import Respectful from './image/Respectful.png';
import Consent from './image/Consent.png';
import Safe_practices from './image/Safe_practices.png';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme on initial load
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
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navbar */}
      <nav className="p-4 shadow-md bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold"></h1>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m16.364 4.364l-.707-.707M7.05 7.05l-.707-.707m12.02 12.02l-.707.707M7.05 16.95l-.707.707M16.95 7.05l-.707-.707"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3a9 9 0 00-9 9 9 9 0 1012.454 8.536A7 7 0 0112 3z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">ලිංගික හා ප්‍රජනන සෞඛ්‍ය පිළිබඳ දැනුවත් කිරීම</h1>
          <p className="mt-4 text-lg sm:text-xl">
          විශ්ව විද්‍යාල තරුණ ප්‍රජාව (වයස 20-27) දැනුවත් කිරීම සඳහා පුළුල් ඩිජිටල් ඉගෙනුම් මොඩියුලය.
          </p>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Topics Covered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Topic Cards */}
            {topics.map((topic) => (
              <Link
                to={topic.link}
                key={topic.title}
                className="group text-center hover:scale-105 transform transition duration-300"
              >
                <div className="w-32 h-32 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:opacity-80 transition duration-300"
                  />
                </div>
                <h4 className="mt-2 text-lg font-semibold group-hover:text-blue-500 dark:group-hover:text-yellow-300">
                  {topic.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const topics = [
  { title: 'ලිංගික සෞඛ්‍ය ', image: Sexual_health, link: '/Sexual_health' },
  { title: 'කැමැත්ත', image: Consent, link: '/Consent' },
  { title: 'ආරක්ෂිත පිළිවෙත්', image: Safe_practices, link: '/Safe_practices' },
  { title: 'ප්‍රජනන අයිතිය', image: ReproductiveRights, link: '/ReproductiveRights' },
  { title: 'ගෞරවනීය සන්නිවේදනය', image: Respectful, link: '/Respectful_communication' },
  { title: 'ඔසප් සෞඛ්‍ය ', image: Menstrual_health, link: '/MenstrualHealthandHygiene' },
  { title: 'සිසුන් සදහා උපදෙස්', image: Confidential_S, link: '/Confidential_S' },
  { title: 'විවෘත සාකච්ඡා', image: Open_Discussions_with_parents_and_the_community, link: '/Open_Discussions_with_parents_and_the_community' },
  { title: 'උපදෙස් ලබා ගැනීම', image: Seeking_Advice_on_Sexual, link: '/Seeking_Advice' },
  { title: 'මානසික යහපැවැත්ම', image: Mental_well_being, link: '/Mental' },
];


export default HomePage;
