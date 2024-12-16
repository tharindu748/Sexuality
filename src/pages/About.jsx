import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold">About Us</h1>
        <div className="flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto space-y-8 mt-8">
      <section>
  <h3 className="text-xl font-semibold mt-8">අපේ මෙහෙයුම</h3>
  <p className="mt-4">
    අපගේ මෙහෙවර වන්නේ ප්‍රජනක සෞඛ්‍යය සහ අයිතිවාසිකම් සම්බන්ධ පුළුල් දැනුමක් සහ සම්පත් සහිත පුද්ගලයන් සවිබල ගැන්වීමයි. දැනුවත් තීරණ සෞඛ්‍ය සම්පන්න ජීවිතයකට සහ ශක්තිමත් ප්‍රජාවකට මඟ පෙන්වන බව අපි විශ්වාස කරමු.
  </p>

  <h3 className="text-xl font-semibold mt-8">අපි ඉදිරිපත් කරන දේ</h3>
  <ul className="list-disc list-inside mt-4 space-y-2">
    <li>ප්‍රජනක සෞඛ්‍යය සහ අයිතිවාසිකම් පිළිබඳ සවිස්තරාත්මක ලිපි</li>
    <li>පවුල් සැලසුම් සහ ආරක්ෂිත පිළිවෙත් සඳහා සම්පත්</li>
    <li>ප්‍රජනක සෞඛ්‍ය සේවා පිළිබඳ නිවැරදි තොරතුරු වෙත ප්‍රවේශ වීම</li>
    <li>ප්‍රජනක සෞඛ්‍ය රැකවරණය අපේක්ෂා කරන පුද්ගලයින් සඳහා සහාය සහ මග පෙන්වීම</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">අපගේ වටිනාකම්</h3>
  <ul className="list-disc list-inside mt-4 space-y-2">
    <li><strong>අධ්යාපනය:</strong> නිවැරදි හා සවිස්තරාත්මක තොරතුරු සැපයීම.</li>
    <li><strong>බලගැන්වීම:</strong> දැනුවත් තීරණ ගැනීමට පුද්ගලයන්ට හැකියාව ලබා දීම.</li>
    <li><strong>සහාය:</strong> ප්‍රජනක සෞඛ්‍යය සඳහා මාර්ගෝපදේශ සහ සම්පත් ලබා දීම.</li>
    <li><strong>ගෞරවය:</strong> සියලු පුද්ගලයන් සඳහා ගෞරවය සහ පෞද්ගලිකත්වය සහතික කිරීම.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">අපව අමතන්න</h3>
  <p className="mt-4">
    ඔබට කිසියම් ප්‍රශ්නයක් ඇත්නම් හෝ වැඩිදුර සහාය අවශ්‍ය නම්, කරුණාකර අප හා සම්බන්ධ වන්න:
    <br />
   <a href="https://sexualityapp.netlify.app/Contact" className="text-blue-500 underline">Contact</a>
  </p>
</section>

      </main>
    </div>
  );
}
