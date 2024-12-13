import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi"; // Importing moon and sun icons from React Icons

const contacts = [
  {
    // name: "Biguni",
    id: "2021ba24938",
    topic: "ලිංගික සෞඛ්‍ය  (Sexual Health)",
    email: "2021ba24938@stu.cmb.ac.lk",
  },
  {
    // name: "Ilanka",
    id: "2021ba24912",
    topic: "කැමැත්ත (Consent)",
    email: "2021ba24912@stu.cmb.ac.lk",
  },
  {
    // name: "Kusalaan",
    id: "2021ba24917",
    topic: "ආරක්ෂිත පිළිවෙත් (Safe Practices )",
    email: "2021ba24917@stu.cmb.ac.lk",
  },
  {
    // name: "Dasuni",
    id: "2021ba24931",
    topic: "ප්‍රජනක අයිතිය (Reproductive Rights)",
    email: "2021ba24931@stu.cmb.ac.lk",
  },
  {
    // name: "Sandaru",
    id: "2021ba24940",
    topic: "ගෞරවනීය සන්නිවේදනය (Respectful Communication)",
    email: "2021ba24940@stu.cmb.ac.lk",
  },
  {
    // name: "Vinodya",
    id: "2021ba24913",
    topic: " ඔසප් සෞඛ්‍ය හා සනීපාරක්ෂාව (Menstrual Health and Hygiene)",
    email: "2021ba24913@stu.cmb.ac.lk",
  },
  {
    // name: "Kalpani",
    id: "2021ba24976",
    topic: "සිසුන් සදහා රහස්‍‍ය පරීක්ෂණ සහ උපදෙස් සේවාව (Confidential Screenings and Counseling Services for Students)",
    email: "2021ba24976@stu.cmb.ac.lk",
  },
  {
    // name: "Yashodhi",
    id: "2021ba24932",
    topic: "ලිංගික සෞඛ්‍ය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීම( Seeking Advice on Sexual Health Matters)",
    email: "2021ba24932@stu.cmb.ac.lk",
  },
  {
    // name: "Kavindu",
    id: "",
    topic: "දෙමාපියන් සහ ප්‍රජාව සමඟ විවෘත සාකච්ඡා (Open Discussions with Parents and the Community)",
    email: "",
  },
  {
    // name: "Madusanka",
    id: "2021ba24942",
    topic: "ලිංගිකත්වය හා සම්බන්ධ මානසික යහපැවැත්ම( Mental Well-being Related to Sexuality)",
    email: "2021ba24942@stu.b.ac.lk",
  },
];

const ContactPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Check localStorage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Store the theme preference
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen py-10 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Page</h1>
        
        {/* Dark/Light Mode Icons in the top-right corner */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
          >
            {darkMode ? (
              <FiSun className="h-6 w-6" /> // Sun icon for light mode
            ) : (
              <FiMoon className="h-6 w-6" /> // Moon icon for dark mode
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300`}
            >
              <h2 className="text-xl font-semibold mb-2">
                {contact.name} ({contact.id})
              </h2>
              <p className="mb-4">{contact.topic}</p>
              {contact.email ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {contact.email}
                </a>
              ) : (
                <p className="text-gray-400">No email available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
