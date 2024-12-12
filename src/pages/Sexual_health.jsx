import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons for dark and light mode

export default function Sexual_health() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Check localStorage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Store the theme preference
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} max-w-7xl mx-auto p-6`}>
      <div className="flex justify-between items-center mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Menstrual Health and Hygiene: Research Facts</h1>
          <p className="text-lg mt-2">Key insights on menstrual health and its global impact.</p>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Research Fact 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Global Impact on Health and Well-being</h3>
          <p className="mt-2">
            Lack of sanitation and hygiene during menstruation can increase the risk of reproductive and urinary tract infections. Studies show that 1 in 10 girls in sub-Saharan Africa miss school due to inadequate facilities and menstrual products (UNICEF, 2021).
          </p>
        </div>

        {/* Research Fact 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Access to Menstrual Products</h3>
          <p className="mt-2">
            Approximately 500 million women and girls worldwide lack access to proper menstrual products, affecting their ability to participate in daily activities (WHO, 2020).
          </p>
        </div>

        {/* Research Fact 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Economic Impact</h3>
          <p className="mt-2">
            The average cost of menstruation-related products per year for one person is estimated to be between $5 to $10, creating financial barriers, especially in developing countries (UNFPA, 2020).
          </p>
        </div>

        {/* Research Fact 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Menstrual Hygiene and Environmental Concerns</h3>
          <p className="mt-2">
            Disposal of sanitary products significantly contributes to environmental waste. Each woman uses between 5,000 and 15,000 disposable sanitary products in her lifetime, creating long-term waste concerns.
          </p>
        </div>

        {/* Research Fact 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Psychosocial Effects</h3>
          <p className="mt-2">
            Menstrual health is linked to mental well-being. Stigma and embarrassment surrounding menstruation often lead to anxiety, school absenteeism, and social isolation (Journal of Adolescent Health).
          </p>
        </div>

        {/* Research Fact 6 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Menstrual Health Education</h3>
          <p className="mt-2">
            Early education on menstrual health improves girls' confidence and well-being. In rural India, menstrual education increased school attendance by up to 40% (UNICEF, 2019).
          </p>
        </div>

        {/* Research Fact 7 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Health Risks of Poor Menstrual Hygiene</h3>
          <p className="mt-2">
            Poor menstrual hygiene can lead to reproductive tract infections (RTIs) and toxic shock syndrome (TSS). In India, 70% of women don't have access to hygienic products.
          </p>
        </div>

        {/* Research Fact 8 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Cultural and Societal Challenges</h3>
          <p className="mt-2">
            In some cultures, menstruation is a taboo, causing social exclusion. A study in Nepal found that 50% of girls in rural areas reported feeling isolated due to cultural restrictions (Journal of Adolescent Health, 2020).
          </p>
        </div>

        {/* Research Fact 9 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Sustainable Menstrual Products</h3>
          <p className="mt-2">
            Sustainable alternatives like menstrual cups and cloth pads are gaining popularity. Menstrual cups are cost-effective and environmentally friendly, reducing waste over time.
          </p>
        </div>

        {/* Research Fact 10 */}
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Advocacy and Policy</h3>
          <p className="mt-2">
            Countries like Kenya, India, and Uganda have implemented policies to ensure free access to menstrual products for schoolgirls, improving menstrual health and hygiene outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
