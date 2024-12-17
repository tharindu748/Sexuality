import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import H1 from './Images/H1.jpg';
import H2 from './Images/H2.jpg';
import H3 from './Images/H3.jpg';

export default function Consent() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode2 = () => {
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
    <div>
      <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <header className="flex justify-between items-center p-4 shadow-md">
          <h1 className="text-2xl font-bold">කැමැත්ත </h1>
          <button
            onClick={toggleDarkMode2}
            className="text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>
        <main className="p-4">
        <section>
  <h3 className="text-xl font-semibold mt-8">කැමැත්ත යනු කුමක්ද?</h3>
  <p className="mt-2 text-justify">
    කැමැත්ත යන්නෙන් අදහස් කරන්නේ අවසර දීම හෝ යම් දෙයකට කැමැත්තෙන් එකඟ වීමයි. ලිංගික සබඳතා සහ ප්‍රජනන අයිතිවාසිකම් වලදී, කැමැත්ත යනු කිසිදු බලයකින්, තර්ජනයකින් හෝ පීඩනයකින් තොරව නිදහසේ තේරීම් කිරීමයි. අන්‍යෝන්‍ය ගෞරවය සහතික කරමින් පාර්ශ්වකරුවන් දෙදෙනාම පැහැදිලිව සන්නිවේදනය කිරීම සහ සිදුවන්නේ කුමක්ද යන්න පිළිබඳව එකඟ වීම අත්‍යවශ්‍ය වේ.
  </p>

  <h3 className="text-xl font-semibold mt-8">ලිංගික සබඳතාවලදී කැමැත්තේ වැදගත්කම</h3>
  <ul className="list-disc list-inside mt-2 space-y- text-justify">
    <li>පාර්ශවකරුවන් දෙදෙනාටම ආරක්ෂිත හා ගෞරවනීය හැඟීමක් ඇති බව කැමැත්ත සහතික කරයි.</li>
    <li>එය හානිය, අපයෝජනය හෝ සූරාකෑම වළක්වයි.</li>
    <li>එය හවුල්කරුවන් අතර විශ්වාසය සහ අවබෝධය ගොඩනඟයි.</li>
    <li>සෞඛ්‍ය සම්පන්න ලිංගික සබඳතා පදනම් වී ඇත්තේ අඛණ්ඩ සන්නිවේදනය සහ අන්‍යෝන්‍ය එකඟතාවය මත මිස බලහත්කාරය හෝ හැසිරවීම මත නොවේ.</li>
    <li>කැමැත්තට ගරු කිරීමෙන් පුද්ගලයන්ට ඔවුන්ගේ ගෞරවය සහ චිත්තවේගී මානසික යහපැවැත්ම පවත්වා ගත හැකිය.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">කැමැත්ත සහ ප්‍රජනන අයිතිවාසිකම්</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>පවුල් සැලසුම්: උපත් පාලන ක්‍රම පිළිබඳ තීරණ වලට දෙදෙනාම එකඟ විය යුතුය (උදා: උපත් පාලනය භාවිතා කිරීම).</li>
    <li>ගැබ් ගැනීම: නීතියට අනුව ගැබ් ගැනීමක් දිගටම පවත්වාගෙන යාම හෝ අවසන් කිරීම තීරණය කිරීමට පුද්ගලයෙකුට අයිතියක් ඇත.</li>
    <li>වෛද්‍ය ක්‍රියා පටිපාටි: සාරවත් ප්‍රතිකාර හෝ විෂබීජහරණය වැනි ප්‍රජනනය හා සම්බන්ධ ප්‍රතිකාර සඳහා කැමැත්ත අවශ්‍ය වේ.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">ලිංගික සබඳතා වල කැමැත්ත පිළිබඳ ප්‍රධාන මූලධර්ම</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>කැමැත්ත පැහැදිලි විය යුතුය: "ඔව්" පැවසීම හෝ ක්‍රියාවන් තුළින් එකඟතාවයක් පෙන්වීම.</li>
    <li>එය නිදහසේ ලබා දිය යුතුය: පීඩනය, තර්ජන හෝ මත්පැන් හෝ මත්ද්‍රව්‍ය වල බලපෑමකින් තොරව.</li>
    <li>කැමැත්ත අඛණ්ඩව පවතී: ක්‍රියාවලිය අතරතුර පවා ඕනෑම වේලාවක එය ඉල්ලා අස්කර ගත හැකිය.</li>
    <li>නිශ්ශබ්දතාවය හෝ ප්‍රතිරෝධය නොමැතිකම යන්නෙන් අදහස් කරන්නේ කැමැත්ත නොවේ.</li>
    <li>වාචික හා වාචික නොවන ඉඟි දෙකම සලකා බැලිය යුතුය. යමෙකු අවිනිශ්චිත හෝ දෙගිඩියාවෙන් සිටී නම්, පැහැදිලි කැමැත්ත සඳහා නැවැත්වීම සහ පරීක්ෂා කිරීම වැදගත්ය.</li>
    <li>කැමැත්ත උද්යෝගිමත් විය යුතුය, එයින් අදහස් කරන්නේ හවුල්කරුවන් දෙදෙනාම ක්‍රියාකාරකම්වල නිරත වීමට උත්සුක වන බවයි.</li>
  </ul>
  <br>
  </br>
  <div className="flex justify-center items-center">
           <img
             src={H1}
             alt="e1"
             className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
           />
         </div>
  <br></br>

  <h3 className="text-xl font-semibold mt-8">කැමැත්ත පිළිබඳ මිථ්‍යාවන් සහ වැරදි වැටහීම්</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>මිථ්‍යාව: සම්බන්ධතාවයක සිටීම යනු ස්වයංක්‍රීය කැමැත්තයි.</li>
    <li>සත්‍යය: සෑම අවස්ථාවකම කැමැත්ත ඉල්ලා සිටිය යුතුය.</li>
    <li>මිථ්‍යාව: යම් ආකාරයකින් ඇඳුම් ඇඳීම යන්නෙන් අදහස් කරන්නේ යමෙකු "එය ඉල්ලා සිටින" බවයි.</li>
    <li>සත්‍යය: ඇඳුම් පැළඳුම් හෝ හැසිරීම කිසි විටෙකත් කැමැත්තෙන් තොර ලිංගික ක්‍රියාකාරකම් සාධාරණීකරණය නොකරයි.</li>
    <li>මිථ්‍යාව: යමෙකු මත්වී සිටී නම්, ඔවුන්ට තවමත් කැමැත්ත ලබා දීමට හැකියාව ඇත.</li>
    <li>සත්‍යය: පුද්ගලයෙකුට පැහැදිලි තීරණ ගැනීමට නොහැකි විය හැකි බැවින් ඔවුන් බීමතින්, හෝ මත්ද්රව්යවල බලපෑමයටතේ සිටී නම් වලංගු කැමැත්ත ලබා දිය නොහැක.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">කැමැත්ත සහ ශ්‍රී ලංකා නීතිය</h3>
  <br>
  </br>
  <div className="flex justify-center items-center">
           <img
             src={H2}
             alt="e1"
             className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
           />
         </div>
  <br></br>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>කැමැත්ත ලබා ගැනීමේ වයස: ශ්‍රී ලංකාවේ, කැමැත්ත ලබා ගැනීමේ නීත්‍යානුකූල වයස අවුරුදු 16 කි. මෙම වයසට අඩු කෙනෙකු සමඟ ලිංගික ක්‍රියාකාරකම්වල යෙදීම පුද්ගලයා එකඟ වුවද ව්‍යවස්ථාපිත ස්ත්‍රී දූෂණයක් ලෙස සැලකේ.</li>
    <li>ලිංගික හිංසනය: කැමැත්තකින් තොරව ඕනෑම ලිංගික ක්‍රියාකාරකමක් ශ්‍රී ලංකාවේ නීතිය අනුව අපරාධයකි. ස්ත්‍රී දූෂණ, ලිංගික අඩන්තේට්ටම් සහ අපයෝජන යනාදිය මෙයට ඇතුළත් ය.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">ප්‍රජනන අයිතිවාසිකම්</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>උපත් පාලන ක්‍රම සඳහා ප්‍රවේශය නීත්යානුකූල හා ආරක්ෂා කර ඇත.</li>
    <li>මවගේ ජීවිතය අවදානමට ලක්වූ විට හැර, ගබ්සාව ශ්‍රී ලංකාවේ නීති විරෝධී ය.</li>
    <li>කැමැත්තෙන් තොරව බලහත්කාරයෙන් විෂබීජහරණය කිරීම හෝ වෛද්‍ය ක්රියා පටිපාටි නීතිය යටතේ දඬුවම් ලැබිය හැකිය.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">ලිංගික සබඳතා වල කැමැත්ත සන්නිවේදනය කිරීම සහ ගරු කිරීම</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>සෑම විටම අසන්න: "ඔබට මෙය සුවපහසුද?" හෝ "මෙයට ඔබ කැමති ද?"</li>
    <li>ලැබෙන ප්‍රතිචාර වලට ඇහුම්කන් දී ඒ අනුව කටයුතු කරන්න.</li>
    <li>"නැත" යන්නට ගරු කරන්න, එය ඔබ බලාපොරොත්තු වූ දේ නොවුනත්.</li>
    <li>අනෙක් පුද්ගලයාට තීරණය කිරීමට කාලය අවශ්‍ය නම් ඉවසීමෙන් හා අවබෝධයෙන් සිටින්න.</li>
    <li>පාර්ශව කරුවන් දෙදෙනාටම ක්‍රියාකාරකම් සමඟ සුවපහසුවක් දැනෙන බවට වග බලා ගන්න, ක්‍රියාවලිය අතරතුරදී යමක් වෙනස් විය හැකි බැවින් සන්නිවේදනය දිගටම පවත්වාගෙන යන්න.</li>
    <li>කැමැත්තට කිසි විටෙකත් ඉක්මන් කිරීම හෝ බල කිරීම නොකළ යුතුය; එය අන්තර් ක්‍රියාකාරිත්වයේ හා අන්තර් සන්නිවේදනයේ ප්‍රතිඵලයක් විය යුතුය.</li>
  </ul>
  <br>
  </br>
  <div className="flex justify-center items-center">
           <img
             src={H3}
             alt="e1"
             className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
           />
         </div>
  <br></br>

  <h3 className="text-xl font-semibold mt-8">අධ්‍යාපන හා දැනුවත් කිරීමේ කාර්යභාරය</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>කැමැත්ත ගැන යෞවනයන්ට ඉගැන්වීම තුළින් ලිංගික හිංසනය සහ වැරදි වැටහීම් අඩු කළ හැකිය.</li>
    <li>පාසල්, විශ්ව විද්‍යාල සහ ප්‍රජාවන්ට ලිංගික අයිතිවාසිකම් සහ වගකීම් පිළිබඳ වැඩමුළු පැවැත්විය හැකිය.</li>
    <li>සෞඛ්‍ය සම්පන්න සබඳතා දිරිමත් කිරීම සඳහා කැමැත්ත පිළිබඳ දැනුවත් කිරීමේදී සීමා මායිම්, ගෞරවය සහ ස්වයං සවිබල ගැන්වීම වැනි මාතෘකා ආමන්ත්‍රණය කළ යුතුය.</li>
  </ul>

  <h3 className="text-xl font-semibold mt-8">ශ්‍රී ලංකාවේ උපකාර සහ මාර්ගෝපදේශන සඳහා සම්පත්</h3>
  <ul className="list-disc list-inside mt-2 space-y-2 text-justify">
    <li>ක්ෂණික ඇමතුම්: WIN (ලිංගික හිංසනය, හිරිහැර සහ අපයෝජනයට ගොදුරු වූවන් සඳහා සහාය සපයයි.) – 011 2671411</li>
    <li>නීතිමය සහාය: ජාතික නීති ආධාර කොමිෂන් සභාව</li>
    <li>සෞඛ්‍ය මධ්‍යස්ථාන: පවුල් සැලසුම් සහ ප්‍රජනන සෞඛ්‍ය සායන</li>
  </ul>
</section>
        </main>
      </div>
    </div>
  );
}
