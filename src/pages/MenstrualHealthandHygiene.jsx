import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import b1 from './Images/b1.jpg';
import b2 from './Images/b2.jpg';

export default function MenstrualHealthandHygiene() {
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
          <h1 className="text-2xl font-bold">ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව</h1>
          <button
            onClick={toggleDarkMode2}
            className="text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>
    
 <main className="p-6">
  <br></br>

 <div className="flex justify-center items-center">
  <img
    src={b2}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>
        <section>
          { <h2 className="text-xl font-semibold mb-4">ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව</h2> }
          <p className='text-justify'>
            <strong>About:</strong> ÷ තරුණ වැඩිහිටි (වයස 20-27) සදහා ඔසප් චක්‍රය හා සනීපාරක්ෂාව පිළිබඳව දැනුවත් කිරීම,ඒ ආශ්‍රිත මනා කළමනාකරණය හා ඒ ආශ්‍රිත පවතින ගැටලු යනාදිය සම්බන්ධව මෙහිදී සාකච්ඡා කරනු ලබයි.         
          </p>
          <p className="mt-4 tec text-justify">
          ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව යන්නෙන් අදහස් කරන්නේ කාන්තාවන්ට සහ ගැහැණු ළමයින්ට ඔවුන්ගේ ඔසප් වීම ආරක්ෂිතව,සුවපහසුව සහ ගෞරවාන්විතව කළමනාකරණය කළ හැකි බව සහතික කරන පිළිවෙත් සහ කොන්දේසි ය. එයට ප්‍රධාන සංරචක කිහිපයක් ඇතුළත් වේ.
          </p>
          <br></br>
          <p className='text-justify'>
          ඔසප් චක්‍රය යනු ගැබ් ගැනීමක් සඳහා සූදානම් වීම සඳහා ඔබේ ශරීරය සෑම මසකම සිදුවන වෙනස්කම් මාලාවකි. 
          ඔසප් චක්‍රයේ අදියර හතර වන්නේ ඔසප් වීම, ෆොලිකුලර් අවධිය, ඩිම්බකෝෂය සහ ලුටීයල් අවධියයි. 
          ඔබේ ඔසප් චක්‍රය අවබෝධ කර ගැනීම ඔබ ගැබ් ගැනීමට බොහෝ දුරට ඉඩ ඇත්තේ කවදාදැයි දැන ගැනීමට උපකාරී වේ.
          ඔසප් වීම ("කාලසීමාව" ලෙසද හැඳින්වේ) යනු සෑම මසකම ලොව පුරා මිලියන ගණනක් කාන්තාවන් අත්විඳින සාමාන්‍ය ජීව විද්‍යාත්මක ක්‍රියාවලියකි. 
          ගර්භාෂ ශ්ලේෂ්මලයෙන් රුධිරය සහ පටක වැගිරෙන අතර යෝනි මාර්ගයෙන් ශරීරයෙන් පිටවන විට කාල පරිච්ඡේදයක් සිදු වේ.
          </p>
<br>
</br>
           <h2 className="text-xl font-semibold mb-4">ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව</h2> 
          <p className='text-justify'>
          ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව ඔසප් වීම සිදු වන පුද්ගලයින්ගේ සමස්ත යහපැවැත්මේ තීරණාත්මක අංගයන් වේ.
           ස්වාභාවික ජීව විද්‍යාත්මක ක්‍රියාවලියක් වුවද, ඔසප් වීම බොහෝ විට අපකීර්තිය, 
           මිථ්‍යාවන් සහ වැරදි තොරතුරු වලින් වට වී ඇති අතර එය ලොව පුරා මිලියන ගණනකට සැලකිය යුතු අභියෝගවලට තුඩු දෙයි.
          ස්ත්‍රී පුරුෂ සමානාත්මතාවය, අධ්‍යාපනය සහ මහජන සෞඛ්‍යය ප්‍රවර්ධනය කිරීම සඳහා මෙම ගැටළු විසඳීම අත්‍යවශ්‍ය වේ.
          </p>
          <br></br>
          <h2 className="text-xl font-semibold mb-4">ඔසප් සෞඛ්‍යය අවබෝධ කර ගැනීම</h2>
<p className='text-justify'>
ඔසප් වීම යනු ගර්භාෂයේ සිට යෝනි මාර්ගය හරහා රුධිරය හා ශ්ලේෂ්මල පටක නිතිපතා පිටවීමයි. එය ප්‍රජනක සෞඛ්‍යය සංකේතවත් කරන අතර සාමාන්‍යයෙන් වැඩිවිය පැමිණීමේ දී ආරම්භ වන අතර එය ආර්තවහරණය දක්වා පවතී. සාමාන්‍ය චක්‍ර දින 21ත් 35ත් අතර පවතින අතර, ඒවා පුද්ගලයාගෙන් පුද්ගලයාට වෙනස් වේ. මානසික ආතතිය, ආහාර රටාව සහ රෝගී තත්ත්වයන් වැනි සාධක ඔසප් සෞඛ්‍යයට බලපෑම් කළ හැකි අතර, ඕනෑම අක්‍රමිකතා නිරීක්ෂණය කිරීම අත්‍යවශ්‍ය වේ.
</p>
<br></br>
<h2 className="text-xl font-semibold mb-4">ඔසප් සනීපාරක්ෂාව පිළිබඳ වැදගත්කම</h2>
<p className='text-justify'>
ඔසප් වීමේදී නිසි සනීපාරක්ෂාව පවත්වා ගැනීමෙන් ආසාදන වැලැක්වීම සහ සුවපහසුව ප්රවර්ධනය කරයි.අපිරිසිදු ද්‍රව්‍ය නැවත භාවිතා කිරීම හෝ ඔසප් නිෂ්පාදන නිතර වෙනස් කිරීම නොසලකා හැරීම වැනි අපිරිසිදු පිළිවෙත් සමේ කෝපයක්,මුත්‍රා ආසාදන හෝ ප්‍රජනක පත්‍ර ආසාදනවලට හේතු විය හැක. පිරිසිදු, ආරක්ෂිත නිෂ්පාදන භාවිතා කිරීම සහ ජලයෙන් ලිංගික ප්‍රදේශ නිතිපතා සේදීම සහතික කිරීම සනීපාරක්ෂාව පවත්වා ගැනීම සඳහා සරල නමත් ඵලදායී ක්‍රම වේ.
</p>
<br></br>
     <h2 className="text-xl font-semibold mb-4">ඔසප් නිෂ්පාදන </h2>
      <p className='text-justify'>ඔසප් නිෂ්පාදන අතර පෑඩ්, ටැම්පොන්, ඔසප් කෝප්ප සහ ඔසප් යට ඇඳුම් ඇතුළත් වේ. සෑම නිෂ්පාදනයක්ම එහි වාසි සහ අවාසි ඇති අතර,තේරීම බොහෝ විට පුද්ගලික මනාපයන්,දැරිය හැකි මිල සහ ප්රවේශ්යතාව මත රඳා පවතී. ඔසප් කෝප්ප සහ රෙදි පෑඩ් වැනි නැවත භාවිත කළ හැකි විකල්ප.පරිසර හිතකාමී සහ ලාභදායී වන අතර ඉවත දැමිය හැකි නිෂ්පාදන බහුලව පවතින නමුත් අපද්‍රව්‍ය ජනනය කරයි.
        </p>
        <br></br>
        <h2 className="text-xl font-semibold mb-4">ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව සඳහා බාධා</h2>
        <p className='text-justify'>
        අධ්‍යාපනය නොමැතිකම: නිවසේ සහ පාසල්වල ප්‍රමාණවත් අධ්‍යාපනයක් නොමැතිකම හේතුවෙන් බොහෝ පුද්ගලයන්ට ඔසප් වීම පිළිබඳ දැනුමක් නොමැත. මෙය වැරදි වැටහීම් සහ අපහසුතාවයන් වර්ධනය කරයි.

        </p>
        <p className='text-justify'>
        ටැබූස් සහ අපකීර්තිය: සංස්කෘතික විශ්වාසයන් බොහෝ විට ඔසප් වීම අපිරිසිදු ලෙස නිරූපණය කරයි, ඔවුන්ගේ ඔසප් වීමේදී පුද්ගලයන් හුදකලා කරයි සහ දෛනික ක්‍රියාකාරකම්වලට ඔවුන්ගේ සහභාගීත්වය සීමා කරයි.

        </p>
        <p className='text-justify'>
        ආර්ථික බාධාවන්: බොහෝ දෙනෙකුට ඔසප් නිෂ්පාදන ලබා ගත නොහැක, රෙදි හෝ පුවත්පත් වැනි අනාරක්ෂිත විකල්ප වෙත යොමු වීම, ඔවුන්ගේ සෞඛ්‍යය අවදානමට ලක් වේ.
        </p>
        <p className='text-justify'>
        සනීපාරක්ෂාව සඳහා සීමිත ප්‍රවේශය: පාසල්, සේවා ස්ථාන සහ පොදු ස්ථානවල ඔසප් නිෂ්පාදන වෙනස් කිරීම සහ බැහැර කිරීම සඳහා ප්‍රමාණවත් පහසුකම් නොමැතිකම සනීපාරක්ෂාව පවත්වා ගැනීමට අභියෝග කරයි.
        </p>
<br></br>
        <h2 className="text-xl font-semibold mb-4">ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව ප්‍රවර්ධනය කිරීම</h2>
<ul className="list-disc pl-5 mt-2">
            <li>අධ්‍යාපනය සහ දැනුවත් කිරීම: මිථ්‍යාවන් දුරු කිරීමට සහ ඔසප් වීම පිළිබඳ සංවාදය සාමාන්‍යකරණය කිරීමට විස්තීරණ ඔසප් සෞඛ්‍ය අධ්‍යාපනය පාසල් විෂය මාලාවේ කොටසක් විය යුතුය. </li>
            <li>නිෂ්පාදන සඳහා ප්‍රවේශය: විශේෂයෙන්ම අඩු ආදායම්ලාභී ප්‍රජාවන් තුළ, රජය සහ සංවිධාන දැරිය හැකි මිලකට හෝ නොමිලේ මාසික නිෂ්පාදන ලබා ගත හැකි බවට සහතික විය යුතුය. </li>
            <li>වැඩිදියුණු කළ සනීපාරක්ෂක පහසුකම්: ඔසප් නිෂ්පාදන වෙනස් කිරීම සහ බැහැර කිරීම සඳහා ආරක්ෂිත, පුද්ගලික සහ පිරිසිදු අවකාශයන් පොදු ස්ථානවලට ප්‍රවේශ විය යුතුය.</li>
            <li>අපකීර්තිය බිඳ දැමීම: පවුල්, ප්‍රජාවන් සහ සේවා ස්ථාන අතර ඔසප් වීම පිළිබඳ විවෘත සාකච්ඡා දිරිමත් කිරීම හානිකර තහනම් කිරීම්වලට අභියෝග කළ හැකිය.</li>
          
          </ul>

</section>
<section className="mt-8">
    <h2 className="text-xl font-semibold mb-4">සවිබල ගැන්වීමේ දී ඔසප් සෞඛ්‍යයේ කාර්යභාරය</h2>
    <p className='text-justify'>
    ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව ආමන්ත්‍රණය කිරීම අධ්‍යාපන ප්‍රතිඵල වැඩිදියුණු කිරීම, ශ්‍රම බලකායේ සහභාගීත්වය වැඩි කිරීම සහ ආත්ම අභිමානය පෝෂණය කිරීම මගින් පුද්ගලයන් සවිබල ගැන්වීමට දායක වේ. බාධාවකින් තොරව ඔසප් වීම පාලනය වන විට, බාධාවකින් තොරව තම අභිලාෂයන් කෙරෙහි අවධානය යොමු කිරීමට එය පුද්ගලයන්ට හැකියාව ලබා දෙයි.
    </p>
    <br></br>

    <h2 className="text-xl font-semibold mb-4">නිගමනය</h2>
    <p className='text-justify'>
    ස්ත්‍රී පුරුෂ සමානාත්මතාවය සහ මහජන සෞඛ්‍ය අරමුණු සාක්ෂාත් කර ගැනීම සඳහා ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව මූලික වේ. අපකීර්තියට ආමන්ත්‍රණය කිරීමෙන්, අධ්‍යාපනය ලබා දීමෙන් සහ නිෂ්පාදන සහ පහසුකම් සඳහා ප්‍රවේශය සහතික කිරීමෙන්, සමාජයට ගෞරවාන්විතව හා ගෞරවයෙන් ඔසප් වීම කළමනාකරණය කළ හැකි පරිසරයක් නිර්මාණය කළ හැකිය. ඔවුන්ගේ ඔසප් සෞඛ්‍යය භාර ගැනීමට පුද්ගලයින් බලගැන්වීම සෞඛ්‍ය සම්පන්න, වඩා සාධාරණ ලෝකයක් කරා යන පියවරකි.
    </p><div className="flex justify-center items-center">
  <img
    src={b1}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>

  </section>

        </main>
      </div>
    </div>
  );
}
