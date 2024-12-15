import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Confidential_S() {
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
          <h1 className="text-2xl font-bold">සිසුන් සඳහා රහස්‍ය පරීක්‍ෂණ සහ උපදේශන සේවා</h1>
          <button
            onClick={toggleDarkMode2}
            className="text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>
        <main className="p-6">
          <br />
          <p className="text-justify">
            <strong>හැඳින්වීම:</strong> තරුණ වැඩිහිටියන් (20-27) සඳහා ලිංගික හා ප්‍රජනක සෞඛ්‍ය අධ්‍යාපනයේ අත්‍යවශ්‍ය අංගයන්
            වන්නේ රහසිගත පරීක්ෂණ සහ උපදේශන සේවායි. මෙම සේවාවන් සිසුන්ට ඔවුන්ගේ ලිංගික සෞඛ්‍යය පිළිබඳ තොරතුරු, සහය සහ
            වෛද්‍ය ප්‍රතිකාර ලබා ගැනීමට ආරක්ෂිත අවකාශයක් සලසා දෙයි. මෙම අංශය මෙම සේවාවන්හි වැදගත්කම, ඒවාට ප්‍රවේශ විය
            හැකි ආකාරය සහ ඒවායින් තරුණ වැඩිහිටියන්ට ලබා දෙන ප්‍රතිලාභ ගවේෂණය කරනු ඇත.
          </p>
          <br />
          <h2 className="text-xl font-semibold mb-4">රහසිගත පරීක්‍ෂණ සහ උපදේශන වල වැදගත්කම</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>
              ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන (ලිංගාශ්‍රිත රෝග), අනපේක්ෂිත ගැබ් ගැනීම් සහ වෙනත් ප්‍රජනක සෞඛ්‍ය ගැටලු කල්තියා
              හඳුනා ගැනීම සහ වැළැක්වීම සඳහා රහස්‍ය පරීක්‍ෂණ ඉතා වැදගත් වේ.
            </li>
            <li>
              ලිංගාශ්‍රිතව බෝවන රෝග පරීක්ෂාව : ලිංගිකව ක්‍රියාශීලී පුද්ගලයින් සඳහා ලිංගාශ්‍රිත රෝග සඳහා නිතිපතා පරීක්ෂා
              කිරීම ඉතා වැදගත් වේ.
            </li>
            <li>
              ගැබ්ගැනීම් පරීක්‍ෂණය : රහස්‍ය ගර්භණී පරීක්‍ෂණයට ප්‍රවේශ වීම සිසුන්ට ඔවුන්ගේ ප්‍රජනක සෞඛ්‍යය පිළිබඳ
              දැනුවත් තීරණ ගැනීමට හැකි වේ.
            </li>
            <li>
              උපත් පාලන උපදේශනය : රහස්‍ය උපදේශන සේවා විවිධ උපත් පාලන ක්‍රම පිළිබඳ තොරතුරු සපයන අතර සිසුන්ට ඔවුන්ගේ
              ජීවන රටාව සහ අවශ්‍යතා සඳහා හොඳම විකල්පය තෝරා ගැනීමට උපකාර කරයි.
            </li>
          </ul>
          <br />
          <h2 className="text-xl font-semibold mb-4">රහසිගත පරීක්‍ෂණ සහ උපදේශන සේවා වෙත ප්‍රවේශ වීම</h2>
          <p className="text-justify">
            තරුණ වැඩිහිටියන්ට ඔවුන්ගේ ලිංගික සෞඛ්‍ය ගැටළු මඟහරවා ගැනීමට උපකාර කිරීමේදී උපදේශන සේවා තීරණාත්මක
            කාර්යභාරයක් ඉටු කරයි. මෙම සේවාවන් අධ්‍යාපන ආයතන තුළ පහසුවෙන් ප්‍රවේශ විය යුතුය
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              කැම්පස් සෞඛ්‍ය මධ්‍යස්ථාන : බොහෝ විශ්ව විද්‍යාල වල ලිංගික හා ප්‍රජනක සෞඛ්‍ය සම්බන්ධ රහස්‍ය උපදේශන සේවා
              සපයන සෞඛ්‍ය මධ්‍යස්ථාන ඇත.
            </li>
            <li>
              මාර්ගගත සම්පත් : බොහෝ ආයතන සිසුන්ට වෘත්තිකයන් සමඟ නිර්නාමිකව කතාබස් කළ හැකි මාර්ගගත උපදේශන සේවා
              සපයයි.
            </li>
            <li>
              ක්ෂණික ඇමතුම් : ලිංගික සෞඛ්‍යය සඳහා කැප වූ ජාතික ක්ෂණික ඇමතුම් මගින් ලිංගික යහපැවැත්ම සම්බන්ධ විවිධ
              ගැටළු සඳහා ක්ෂණික සහාය සහ මග පෙන්වීම ලබා දිය හැක.
            </li>
          </ul>
          <br />
          <h2 className="text-xl font-semibold mb-4">ශ්‍රී ලංකාවේ රහසිගත පරීක්‍ෂණ සහ උපදේශන සේවා සඳහා ප්‍රවේශ විය හැකි ස්ථාන</h2>
          <div className="mb-4">
            <p className="font-semibold">ශ්‍රී ලංකා පවුල් සැලසුම් සංගමය (FPASL)</p>
            <p><strong>සම්බන්ධතා අංකය:</strong> +94 11 269 5555</p>
            <p>
              <strong>විද්‍යුත් තැපැල් ලිපිනය:</strong>{' '}
              <a href="mailto:info@fpasanet.org" className="text-blue-500">info@fpasanet.org</a>
            </p>
            <p>
              <strong>වෙබ් අඩවිය:</strong>{' '}
              <a href="http://www.fpasanet.org" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                www.fpasanet.org
              </a>
            </p>
          </div>
          <section id="government-health">
        <h2>ශ්‍රී ලංකා සෞඛ්‍ය අමාත්‍යාංශය</h2>
        <p><strong>සම්බන්ධතා අංකය:</strong> +94 11 269 1111</p>
        <p><strong>විද්‍යුත් තැපැල් ලිපිනය:</strong> <a href="mailto:info@health.gov.lk">info@health.gov.lk</a></p>
        <p><strong>වෙබ් අඩවිය:</strong> <a href="http://www.health.gov.lk" target="_blank">www.health.gov.lk</a></p>
        <p>මේ හරහා තමා අදාළ දිස්ත්‍රික්කයේ හෝ තමාට අවශ්‍ය දිස්ත්‍රික්කයේ රජයේ රෝහල් පිළිබඳ තොරතුරු ලබා ගත හැක.</p>
    </section>

    <section id="university-health">
        <h2>විශ්වවිද්‍යාල සෞඛ්‍ය මධ්‍යස්ථාන</h2>
        <p><strong>සම්බන්ධතා අංකය:</strong> +94 11 250 1000 (සාමාන්‍ය විමසීම්)</p>
        <p><strong>විද්‍යුත් තැපැල් ලිපිනය:</strong> <a href="mailto:health@cmb.ac.lk">health@cmb.ac.lk</a></p>
        <p><strong>වෙබ් අඩවිය:</strong> <a href="http://www.cmb.ac.lk" target="_blank">www.cmb.ac.lk</a></p>
        <p>අනෙකුත් විශ්ව විද්‍යාල සඳහා උපදේශන සේවාවන් හි දුරකථන අංක හෝ විද්‍යුත් තැපැල් ලිපින විශ්ව විද්‍යාලයේ නිල වෙබ් පිටුවෙන් ලබාගත හැක.</p>
    </section>

    <section id="private-hospitals">
        <h2>පුද්ගලික සායන</h2>
        <p><strong>සම්බන්ධතා අංකය:</strong> +94 11 2 696969</p>
        <p><strong>විද්‍යුත් තැපැල් ලිපිනය:</strong> <a href="mailto:info@nawalokahospital.com">info@nawalokahospital.com</a></p>
        <p><strong>වෙබ් අඩවිය:</strong> <a href="http://www.nawalokahospital.com" target="_blank">www.nawalokahospital.com</a></p>
    </section>

    <section id="non-governmental-organizations">
        <h2>රාජ්‍ය නොවන සංවිධාන</h2>
        <p><strong>සම්බන්ධතා අංකය:</strong> +94 11 2 693333</p>
        <p><strong>විද්‍යුත් තැපැල් ලිපිනය:</strong> <a href="mailto:info@youthadvocacy.org">info@youthadvocacy.org</a></p>
        <p><strong>වෙබ් අඩවිය:</strong> <a href="http://www.youthadvocacy.org" target="_blank">www.youthadvocacy.org</a></p>
    </section>

    <section id="national-aids-program">
        <h2>ජාතික ලිංගාශ්‍රිත රෝග/ඒඩ්ස් පාලන වැඩසටහන</h2>
        <p><strong>ලිපිනය:</strong> No.29, De Saram Place, Colombo 10, Sri Lanka</p>
        <p><strong>සම්බන්ධතා අංකය:</strong> +94 112 667 163, +94 112 665 277</p>
        <p><strong>විද්‍යුත් තැපැල් ලිපිනය:</strong> <a href="mailto:infonsacpsim@gmail.com">infonsacpsim@gmail.com</a></p>
    </section>

    <section id="confidential-testing">
        <h2>ලිංගාශ්‍රිත රෝග පිළිබඳව රහස්‍ය පරික්ෂණ සහ උපදේශන සේවා</h2>
        <p>මෙහිදී රහස්‍ය පරීක්‍ෂණ සහ උපදේශන සේවා සිදු කර ගත හැක. සිසුන්ට ඉහත සංවිධාන වෙත සෘජුවම සම්බන්ධ වීමට හැකියාව ඇත.</p>
    </section>

    <section id="service-connection">
        <h2>මෙම සේවාවන් සමඟ සම්බන්ධ වන ආකාරය</h2>
        <ul>
            <li>සැපයූ සම්බන්ධතා අංක හෝ විද්‍යුත් තැපැල් ලිපින හරහා සිසුන්ට ඉහත සංවිධාන වෙත සෘජුවම සම්බන්ධ විය හැක.</li>
            <li>විශේෂිත සේවාවන්, හමුවීම් කාලසටහන් කිරීම සහ ඊට සම්බන්ධ විය හැකි වියදම් පිළිබඳ වැඩි විස්තර සඳහා ඔවුන්ගේ වෙබ් අඩවි පරීක්ෂා කිරීම සුදුසුය.</li>
            <li>බොහෝ ආයතන ක්ෂණික සහාය සඳහා කතාබස් විකල්ප හෝ උපකාරක මාර්ග ඇතුළු සම්බන්ධි සම්පත් ද සපයයි.</li>
            <li>මෙම සම්බන්ධතා උපයෝගී කර ගැනීමෙන්, තරුණ වැඩිහිටියන්ට ශ්‍රී ලංකාව තුළ පවතින අවශ්‍ය රහස්‍ය පරීක්ෂණ සහ උපදේශන සේවා සමඟ ඵලදායී ලෙස සම්බන්ධ විය හැක.</li>
        </ul>
    </section>

    <section id="benefits-of-confidential-services">
        <h2>රහසිගත පරීක්‍ෂණ සහ උපදේශන සේවාවන්හි ප්‍රතිලාභ</h2>
        <ul>
            <li><strong>වැඩිවන ප්‍රයෝජනය:</strong> සිසුන් තම තොරතුරු පුද්ගලිකව පවතිනු ඇති බව දන්නා විට, ඔවුන් අවශ්‍ය සෞඛ්‍ය සේවා ලබා ගැනීමට වැඩි ඉඩක් ඇත.</li>
            <li><strong>සවිබල ගැන්වීම:</strong> මෙම සම්පත් වෙත ප්‍රවේශ වීම තරුණ වැඩිහිටියන්ට ඔවුන්ගේ ලිංගික සෞඛ්‍ය තීරණ පිළිබඳ පාලනය ලබා දීමෙන් බල ගන්වයි.</li>
            <li><strong>අපකීර්තිය අඩු කිරීම:</strong> රහස්‍යභාවය ප්‍රවර්ධනය කිරීම ලිංගික සෞඛ්‍යය පිළිබඳ සාකච්ඡා සාමාන්‍යකරණය කිරීමට උපකාරී වේ.උපකාර පැතීම හා සම්බන්ධ අපකීර්තිය අඩු කරයි.</li>
            <li><strong>වැඩිදියුණු කළ මානසික සෞඛ්‍යය:</strong> උපකාරක පරිසරයක් පවතින බව දැන ගැනීමෙන් ලිංගික සෞඛ්‍ය ගැටළු සම්බන්ධ කාංසාව සමනය කළ හැකිය.</li>
            <li><strong>ප්‍රජා දැනුවත්භාවය:</strong> ප්‍රජාව තුළ මෙම සේවාවන් පිළිබඳ විවෘත සංවාද දිරිමත් කිරීම ලිංගික සෞඛ්‍ය ගැටලු අවට පිළිගැනීමේ සහ සහයෝගයේ සංස්කෘතියක් පෝෂණය කරයි.</li>
        </ul>
    </section>

    <section id="conclusion">
        <h2>නිගමනය</h2>
        <p>විශ්ව විද්‍යාල තුළ මෙන්ම ඉන් පරිබාහිර වයස අවුරුදු 20-27 අතර තරුණ වැඩිහිටියන්ගේ ලිංගික සහ ප්‍රජනක සෞඛ්‍යය ප්‍රවර්ධනය කිරීම සඳහා රහස්‍ය පරීක්ෂණ සහ උපදේශන සේවා අත්‍යවශ්‍ය මෙවලම් බවට වර්තමානය වන විට පත්ව ඇත.මෙම සම්පත් වෙත ප්‍රවේශ විය හැකි බව හොඳින් ප්‍රවර්ධනය කරන බව සහ ඒවායේ රහස්‍යභාවය සඳහා ගරු කරන බව සහතික කිරීමෙන් උපකාරක පරිසරයක් තුළ ඔවුන්ගේ යහපැවැත්මට ප්‍රමුඛත්වය දීමට සිසුන් බල ගැන්වීමට අපට හැකිය.</p>
    </section>
        </main>
      </div>
    </div>
  );
}
