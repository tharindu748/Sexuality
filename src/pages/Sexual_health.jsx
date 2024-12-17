import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import G1 from './Images/G1.jpg';
import G2 from './Images/G2.jpg';
import G3 from './Images/G3.jpg';
import G4 from './Images/G4.jpg';
import G5 from './Images/G5.jpg';
import G6 from './Images/G6.jpg';
import G7 from './Images/G7.jpg';
import G8 from './Images/G8.jpg';
import G9 from './Images/G9.jpg';
import G10 from './Images/G10.jpg';


export default function ReproductiveRights() {
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
      document.documentElement.classList.add('dark'); // Add dark mode class to root
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark'); // Remove dark mode class from root
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>

<header className="flex justify-between items-center p-4 shadow-md">


<h1 className="text-2xl font-bold">ලිංගික සෞඛ්‍ය</h1>
      

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
<main className="p-6">
        <br></br>

        <section>

          <p className="mt-2 text-justify ">
          ලෝක සෞඛ්‍ය සංවිධානය නිර්වචනය කරන ආකාරයට ලිංගික සෞඛ්‍ය යනු; කායික ,මානසික ,සමාජීය හා චිත්තවේගීය යහපැවැත්මේ තත්ත්වයකි.ලිංගික සෞඛ්‍ය  යනු  හුදෙක් ලිංගික අක්‍රීයතා හෝ දුබලතා නොමැතිකම පමණක් නොව, මීට ලිංගිකත්වය හා ලිංගික සම්බන්ධතා සදහා බලහත්කාරයෙන්,වෙනස්කොට සැලකීමෙන් සහ ප්‍රචණ්ඩත්වයෙන් තොර ,ප්‍රසන්න සහ ආරක්ෂිත ලිංගික අත්දැකීම් ලබාගැනීමේ හැකියාව ඇති ගෞරවනීය ප්‍රවේශයක් ද අවශ්‍ය වේ.

          පුද්ගලයකු තම ශරීරය  ආකර්ෂණීය ලෙස දකින ආකාරය,තම ශරීරය පිළිබඳව සිතන ආකාරය,ඔවුන් ලිංගිකව ආකර්ෂණය වන්නේ කුමන පාර්ශ්වයන් වෙතද ආදි වූ බොහෝ කාරණා මෙම ලිංගික සෞඛ්‍ය යන සංකල්පය තුළ අන්තර්ගත වේ.
          </p>
        </section>
        <br></br>
<section>
   <div className="flex justify-center items-center">
    <img
      src={G1}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
        <section>
          <h2 className="text-xl font-semibold">ලිංගික සෞඛ්‍යය සහ ප්‍රජනක සෞඛ්‍යය අතර වෙනස</h2>
          <p className="mt-2 text-justify">
            ලිංගික සෞඛ්‍යය සහ ප්‍රජනක සෞඛ්‍යය සමීපව සම්බන්ධ වන නමුත් වෙනස් පදනම්
            මත පිහිටා ඇත. පහත වගුවේ මෙම වෙනස්කම් සනිටුහන් වේ:
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border border-gray-300">අංගය</th>
                  <th className="px-4 py-2 border border-gray-300">ලිංගික සෞඛ්‍යය</th>
                  <th className="px-4 py-2 border border-gray-300">ප්‍රජනක සෞඛ්‍යය</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">විෂය පථය</td>
                  <td className="px-4 py-2 border border-gray-300">මෙය ලිංගිකත්වය සම්බන්ධයෙන් කායික, චිත්තවේගීය, මානසික සහ සමාජීය යහපැවැත්මේ තත්ත්වයකි.</td>
                  <td className="px-4 py-2 border border-gray-300">මෙය ප්‍රජනක පදධතියට අදාළ සියලු කාරණා සම්බන්ධයෙන් කායික, මානසික සහ සමාජීය යහපැවැත්මේ තත්ත්වයකි.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">මූලික අවධානය යොමු කරන ක්ෂේත්‍ර</td>
                  <td className="px-4 py-2 border border-gray-300">ලිංගිකත්වය, සබඳතා සහ ලිංගික අයිතිවාසිකම් පිළිබඳ පුළුල් අවධානය යොමු කරයි.</td>
                  <td className="px-4 py-2 border border-gray-300">විශේෂයෙන් ප්රජනක අවයව, ක්රියාවලීන් සහ දරු ප්රසූතිය කෙරෙහි අවධානය යොමු කරයි.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">මානසික සහ චිත්තවේගීය යහපැවැත්ම</td>
                  <td className="px-4 py-2 border border-gray-300">ලිංගික සම්බන්ධතා,ආරක්ෂිත සහ සම්මුති පිළිවෙත්,ලිංගාශ්‍රිත රෝග වැළැක්වීම,ලිංගික අයිතිවාසිකම් සහ ප්‍රචණ්ඩත්වයෙන් නිදහස් වීම</td>
                  <td className="px-4 py-2 border border-gray-300">සාරවත් බව,ගැබ් ගැනීම සහ දරු ප්රසූතිය,උපත් පාලන සහ පවුල් සැලසුම්</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border border-gray-300">ඉලක්කගත ප්‍රදේශ</td>
                  <td className="px-4 py-2 border border-gray-300">සෞඛ්ය සම්පන්න ලිංගික සබඳතා,කැමැත්ත සහ ලිංගික අයිතිවාසිකම්,සතුට සහ සමීපත්වය</td>
                  <td className="px-4 py-2 border border-gray-300">ගර්භනී සත්කාර,මාතෘ සෞඛ්ය,වඳභාවයට ප්‍රතිකාර</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border border-gray-300">උදාහරණ මාතෘකා</td>
                  <td className="px-4 py-2 border border-gray-300">ආරක්ෂිත ලිංගික හැසිරීම්,කැමැත්ත මත අධ්‍යාපනය,LGBTQ+ ඇතුළත් වීම,ලිංගාශ්‍රිත රෝග පාලනය සඳහා එන්නත් කිරීම.</td>
                  <td className="px-4 py-2 border border-gray-300">ප්‍රසව හා ප්‍රසව සත්කාර,පවුල් සැලසුම්,DOOS හෝ andomatrincie වැනි ප්‍රජනක ආබාධ කළමනාකරණය කිරීම</td>
                </tr>
              </tbody>
            </table>
            <p className='text-justify'>කෙසේ වෙතත් පුද්ගලයකුට පරිපූර්ණ ලිංගික සෞඛ්‍යයක් ලබාගැනීමට නම් ඉහත සංකල්ප දෙකම ලගාකරගැනීම ඉතා වැදගත් වේ. </p>
          </div>
        </section>
<br></br>
        <section>
  <h2 className="text-xl font-semibold">ස්ත්‍රී පුරුෂ ලිංගික පද්ධති හදුනා ගනිමු.</h2>
  <p className="mt-2 text-justify">
  ප්‍රජනක පද්ධතියේ ප්‍රධාන කාර්යය නව ජීවියකු බිහි කිරීමයි. ස්ත්‍රී සහ පුරුෂ ප්‍රජනක පද්ධතිවල ව්‍යුහය සහ ක්‍රියාකාරිත්වය එකිනෙකට වෙනස් වේ. ස්ත්‍රී සහ පුරුෂ ප්‍රජනක පද්ධති වලින් ජන්මාණු නිපද වේ. ස්ත්‍රී ජන්මාණු ඩිම්බ නම් වන අතර පුරුෂ ජන්මාණු ශුක්‍රාණු නම් වේ. ප්‍රජනක පද්ධතිය ළමා කාලයේ දී ක්‍රියාකාරී නොවේ. යොවුන් විය එළඹීමත් සමග ම ද්විතියික ලිංගිත ලක්ෂණ ඇති වන අතර ප්‍රජනක පද්ධති මගින් හෝර්මෝන නිපදවීම සහ පරිණත ජන්මාණු නිපද සිදු කරයි.
  </p>
  <br></br>
  <h4 className="text-xl font-semibold">ස්ත්‍රී ප්‍රජනක පද්ධතිය.</h4>
  <ul className="list-disc ml-6 mt-2">
    <li>ස්ත්‍රී ප්‍රජනක පද්ධතියේ අවයවවල කාර්යයන්,</li>
    <li>ඩිම්බකෝෂ (Ovary) ඩිම්බ නිපදවීම, හෝර්මෝන නිපදවීම.</li>
    <li>පැලෝපීය නාලය(Fallopian tube) -ඩිම්බය ගර්භාෂය දක්වා ගෙනයාම, ඩිම්බය සංසේචනය</li>
    <li>ගර්භාශය(Uterus)-කළලයේ වර්ධනය සම්පූර්ණ වන තෙක් පෝෂණය සහ ආරක්ෂාව සැපයීම</li>
    <li>ස්ත්‍රී ප්‍රජනක පද්ධතිය ඩිම්බකෝෂ යුගලය, පැලෝපීය නාල යුගලය, ගර්භාෂය ,යෝනි මාර්ගය සහ බාහිර ලිංගේන්ද්‍රීය යන කොටස් වලින් සමන්විත වේ.</li>
    <li>යෝනි මාර්ගය(vagina)- සංසර්ග ක්‍රියාවලිය සිදු වීම, වර්ධනය සම්පූර්ණ වූ භ්‍රෑණය ප්‍රසූතිය</li>
  </ul>
</section>
<br></br>
<section>
   <div className="flex justify-center items-center">
    <img
      src={G2}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>

<section>
  <h2 className="text-xl font-semibold">ඩිම්බකෝෂ</h2>
  <p className="mt-2 text-justify">
  ස්ත්‍රී ජන්මාණු සෛල නිපදවීම සිදුකරනු ලබන්නේ ඩිම්බ කෝෂ මගිනි. ගැහැණු දරුවෙකු ඉපදෙන අවස්ථාවේ දී ඩිම්බ කෝෂයේ නොමේරු ඩිම්බ විශාල ගණනක් තැන්පත් වී ඇත. හැහැණු ළමයකු වැඩිවිය පැමිණීමෙන් පසු ඩිම්බයක් මෙරුණු තත්වයට පත් වී වීම පෝෂයෙන් මුදා හැරේ. මෙය ඩිම්බ මෝචනය නම් වේ. සෑම ඔසප් චක්‍රයකදීමය සාමාන්‍යයෙන් දින 28 කට වරක් මෙම ඩිම්බ මෝචන ක්‍රියාවලිය සිදු වේ.
  </p>
  <p>ඩිම්බකෝෂ මගින් සිදු කෙරෙන අනෙකුත් ප්‍රධාන කාර්ය වනුයේ ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටෙරෝන් හෝමෝන නිපදවීමයි.</p>
</section>
<br></br>
<section>
   <div className="flex justify-center items-center">
    <img
      src={G3}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">පැලෝපීය නාල</h2>
  <p className="mt-2 text-justify">
  පැලෝපීය නාල ඩිම්භකෝශ අසලින් ආරම්භ වන අතර දිගින් 10 cm පමණ වේ.එය ගර්භාෂයේ බිත්තිය හරහා ගමන් කර ගර්භාෂයේ කුහරය තුළට විවෘත වෙයි.ඩිම්බකෝෂ අසලදී පැලෝපීය නාල පුනීලාකාර  හැඩයක් ගන්නාඅතර ඩිම්බකෝෂය මද වශයෙන් ආවරණය කරයි .ඩිම්බකෝෂයෙන් මුදා හරින ඩිම්බ පැලෝපීය  නාලයේ පුනීලාකාර කෙලවරෙන් ඇතුළු වී පැලෝපීය  නාලය දිගේ ගර්භාෂය වෙත ගමන්කරයි.
  </p>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">ගර්භාශය</h2>
  <p className="mt-2 text-justify">
  ගර්භාෂය ඇතුළු කුහරයක් සහිත පේෂීමය අවයවයකි.පැලෝපීය  නාලය දිගේ ගමන් කරන ඩිම්බය ශුක්‍රාණුවක් සමඟ සංසේචනය වුවහොත් එය පැලෝපීය නාලය  දිගේ පහළට පැමිණ ගර්භාෂය තුළ තැන්පත් වේ. කලලයක් පිළිසිඳ ගැනීමෙන් පසුව කලලය වර්ධනය වීමත් සමඟම ගර්භාෂය ක්‍රමයෙන් විශාල වේ. කලලයේ වර්ධනය සම්පූර්ණ වනතෙක් ගර්භාෂය මගින් පෝෂණය සහ ආරක්‍ෂාව සැපයීම සිදුකෙරේ.
  </p>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">යෝනි මාර්ගය</h2>
  <p className="mt-2 text-justify">
  ගර්භාෂයේ සිට බාහිර ලිංගික අවයව දක්වා පිහිටා ඇති පේශීමය නාලයකි.සංසර්ගයේදී පිටවන ශුක්‍රාණු යෝනි මාර්ගය දිගේ පිහිනා ගොස් පැලෝපීය නාලයේදී ඩිම්බය සංසේචනය කරයි. එමෙන්ම වර්ධනය සම්පූර්ණ වූ භ්‍රඈණය යෝනි මාර්ගය දිගේ ගමන් කිරීමෙන් දරු ප්‍රසූතිය සිදුවේ.
  </p>
</section>

<br></br>
<section>
  <h2 className="text-xl font-semibold">ආර්තව චක්‍රය සහ ස්ත්‍රී ප්‍රජනක හෝර්මෝන.</h2>
<br></br>
  <section>
   <div className="flex justify-center items-center">
    <img
      src={G4}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
  <p className="mt-2 text-justify">
  ආර්තව චක්‍රයේ පළමු වන සතිය තුළ ඊස්ට්‍රජන් හෝර්මෝනය වැඩිපුර ශ්‍රාවය නිසා ගර්භාශයේ ඇතුළත බිත්තිය ඝනකමින් වැඩිවන අතර එහි රුධිර වාහිනී වැඩිපුර වර්ධනය වේ. චක්‍රයේ දාහතරවන දිනය පමණ වන විට පරිණත ඩිම්බය ඩිම්බ කෝෂයේ මතුපිටට පැමිණේ. ආර්තව චක්‍රයේ දින 14-28 දක්වා කාලය තුළ ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝර්මෝන ශ්‍රාවය ඉහළ යයි. ප්‍රොජෙස්ටරෝන් හෝර්මෝනය මගින් ගර්භාශයේ බිත්තිවල රුධිර වාහිනී තව දුරටත් වර්ධනය වේ. මෙසේ ගර්භාශ ඇතුළු බිත්තියේ ඇති වන වෙනස් කම් නිසා සංසේචනය සිදු වුව හොත් වැඩෙන කළලයට පෝෂණය සැපයීමට සුදුසු පරිසරයක් ඇති වේ. ඩිම්බය සංසේචනය සිදු නොවුව හොත් 24 වන දිනයේ දී පමණ ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝර්මෝන ශ්‍රාවය පහළ යාම සිදු වේ. එහි ප්‍රතිඵලයක් ලෙස ගර්භාශයේ ඇතුළු බිත්තිය බිඳ වැටේ. රුධිරය සමග බිඳුණු පටක යෝනි මාර්ගය තුළින් පිටවේ. මෙම ක්‍රියාවලිය ආර්තවය හෙවත් ඔසප් වීම ලෙස හැඳින් වේ. එය දින 3-4 ක් පමණ පවතී. ද්විතියික ලිංගික ලක්ෂණ ඇති වීමෙන් පසු වැඩිවියට පත්වීමත් සමග ආරම්භ වන ආර්තව චක්‍රය වයස 45-50 දක්වා සිදු වේ.
  </p>
  <p>ඩිම්බ කෝෂයෙන් නිපද වන ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝර්මෝන වලට අමතර ව පූර්ව පිටියුටරිය මගින් ශ්‍රාවය වන FSH සහ LH හෝර්මෝන මගින් ඩිම්බ පරිණත වීම සහ ඩිම්බ කෝෂවලින් හෝර්මෝන ශ්‍රාවය වීම කෙරෙහි බලපෑම් ඇති කරයි.</p>

</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">පුරුෂ ප්‍රජනක පද්ධතිය</h2>
  <ul className="list-disc ml-6 mt-2">
    <li>පුරුෂ ප්‍රජනක පද්ධතිය පහත දැක්වෙන කොටස් වලින් යුක්තය.</li>
    <li>වෘෂණ(Testes).</li>
    <li>ශුක්‍ර නාල(Ductus deferentia).</li>
    <li>ශුක්‍ර ආශයිකා (Seminal vesicle). </li>
    <li>විසර්ජක නලය (Ejaculatory duct).</li>
    <li>පුරඃස්ථ ග්‍රන්ථි (Prostate gland).</li>
    <li>ශිෂ්ණය (Penis).</li>
  </ul>
  
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold"> ශිෂ්ණය (Penis)</h2>
  <h3 className="text-xl font-semibold"> අපිවෘෂණය(Epididymis)</h3>

</section>
<section>
   <div className="flex justify-center items-center">
    <img
      src={G5}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">වෘෂණ (Testes)</h2>
  <p className="mt-2 text-justify">
  උදර කුහරයට පහළින් වෘෂණ කෝෂ නම් සමෙන් සෑදුණු මල්ලක් තුළ වෘෂණ පිහිටා ඇත. උදර කුහරයේ වැඩි උෂ්ණත්වය නිසා ශුක්‍රාණු විනාශ විය හැකි බැවින් වෘෂණ මෙසේ පිටතින් පිහිටා ඇත. වෘෂණය තුළ ශුක්‍රධර නාලිකා රාශියක් පිහිටා ඇත. ශුක්‍රාණු නිපදවනු ලබන්නේ මෙම ශුක්‍රධර නාලිකා තුළය. වෘෂණ කෝෂ තුළ ඇති වෙනත් සෛල වර්ගයකින් ටෙස්ටොස්ටෙරෝන් නම් පුරුෂ ප්‍රජනක හෝර්මෝනය නිපද වේ.
  </p>
</section>

<section>
   <div className="flex justify-center items-center">
    <img
      src={G6}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">ශුක්‍ර නාලය (Ductus deferentia)</h2>
  <p className="mt-2 text-justify">
  ශුක්‍ර නාලය වෘෂණයේ සිට යටි බඩ ප්‍රදේශය දක්වා ගමන් කර උදර කුහරයේ පහත පිහිටි ශ්‍රෝණි කුහරය වෙත ඇතුළු වේ. ශුක්‍ර නාලයේ අවසාන කොටස ශුක්‍ර ආශයිකාව සමග එකතු වී විසර්ජක නලය (Ejaculatory duct) බවට පත් වේ. විසර්ජක නලය පුරාස්ථ ග්‍රන්ථිය තුළින් ගමන් කර මුත්‍ර මාර්ගයට (Urethra) විවෘත වේ.</p>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">ශුක්‍ර ආශයිකා (Seminal vesicles)</h2>
  <p className="mt-2 text-justify">
  ශුක්‍ර ආශයිකා 5cm පමණ දිග වන අතර එය මුත්‍රාශයේ පහළ කොටසට පිටතින් පිහිටා ඇත. ශුක්‍ර නාලය සමග එකතු වී විසර්ජක නලය බවට පත් වේ. ශුක්‍ර ආශයිකා මගින් ශ්‍රාවය කරන දියරය ශුක්‍ර තරලයට එක් වේ.</p>
</section>

<br></br>
<section>
  <h2 className="text-xl font-semibold">පුරාස්ථ ග්‍රන්ථිය (Prostate gland)</h2>
  <p className="mt-2 text-justify">
  පුරාස්ථ ගුන්ථිය මුත්‍රාශයට පහළින් මුත්‍ර මාර්ගය වට කර පිහිටා ඇත. පුරුස්ථ ග්‍රන්ථියේ ශ්‍රාවය ශුක්‍ර තරලයට එක් වේ.
ශුක්‍ර ආශයිකා සහ පුරාස්ථ ග්‍රන්ථි වල ශ්‍රාවය එක් වීමෙන් ශුක්‍ර තරලය සෑදේ.
</p>
</section>
<br></br>
<section>
  <h1 className="text-xl font-semibold">ලිංගික පද්ධතිය ආශ්‍රිත රෝග</h1>
  <h2 className="text-xl font-semibold">1. ලිංගිකව සම්ප්‍රේෂණය විය හැකි රෝග </h2>
  <p className="mt-2 text-justify">
  දෙදෙනෙකු අතර පවතින ලිංගික සබඳතාවක් නිසා එක් පුද්ගලයකුගෙන් අනෙක් පුද්ගලයාට සම්ප්‍රේෂණය විය හැකි රෝග ලිංගිකව සම්ප්‍රේෂණය වන රෝග ලෙස හඳුන්වයි. ගොනෝරියා, සිපිලිස්, හර්පීස් සහ ඒස් ලිංගිකව සම්ප්‍රේෂණය වන රෝග කිහිපයකි.
</p>
</section>
<br></br>
<section>
   <div className="flex justify-center items-center">
    <img
      src={G7}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
<section>
  <h1 className="text-xl font-semibold">ලිංගික පද්ධතිය ආශ්‍රිත රෝග</h1>
  <h2 className="text-xl font-semibold">1. ලිංගිකව සම්ප්‍රේෂණය විය හැකි රෝග </h2>
  <p className="mt-2 text-justify">
  දෙදෙනෙකු අතර පවතින ලිංගික සබඳතාවක් නිසා එක් පුද්ගලයකුගෙන් අනෙක් පුද්ගලයාට සම්ප්‍රේෂණය විය හැකි රෝග ලිංගිකව සම්ප්‍රේෂණය වන රෝග ලෙස හඳුන්වයි. ගොනෝරියා, සිපිලිස්, හර්පීස් සහ ඒස් ලිංගිකව සම්ප්‍රේෂණය වන රෝග කිහිපයකි.
</p>
</section>
 <br></br> 
<section>
  <h2 className="text-xl font-semibold">2. ස්ත්‍රී ප්‍රජනක පද්ධතියේ පිළිකා</h2>
  <p className="mt-2 text-justify">
  ඩිම්බ කෝෂයේ, ගර්භාශයේ සහ ගැබ් ගෙලෙහි පිළිකා ඇති විය හැකි ය. ගැබ්බ්ගෙල පිළිකා මුල් අවදියේ හදුනා ගැනීම සඳහා වයස 35 ට වැඩි සෑම කාන්තාවක් ම පැප් පරීක්ෂණය (Pap smear) කර ගත යුතු ය.
</p>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">3. පුරුෂ ප්‍රජනක පද්ධතියේ රෝග</h2>
  <p className="mt-2 text-justify">
  මහලු වයසේ දී පිරිමින්ගේ පුරාස්ථ ග්‍රන්ථිය විශාල වීම නිසා මුත්‍ර කිරීමේ අපහසුව ඇති විය හැකිය. එමෙන් ම පුරාස්ථ ග්‍රන්ථියේ පිළිකා ඇති විය හැකිය.
</p>
</section>
<br></br>
<section>
  <h2 className="text-xl font-semibold">ප්‍රජනක අවයවවල විවිධත්වය සහ සුන්දරත්වය</h2>

</section>
<br></br>
  <section>
   <div className="flex justify-center items-center">
    <img
      src={G8}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<section>
   <div className="flex justify-center items-center">
    <img
      src={G9}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
  
<br></br>

<section>
  <h2 className="text-xl font-semibold">How to maintain vagina and penis hygiene.</h2>
  <h2 className="text-xl font-semibold">යෝනි මාර්ගයෙහි සහ ශිෂ්ණයෙහි සනීපාරක්ෂාව පවත්වා ගන්නේ කෙසේද?</h2>
  <h2 className="text-xl font-semibold">යෝනි මාර්ගය පිරිසිදු කිරීම සඳහා, ඔබට:</h2>
  <p className="mt-2 text-justify">
  යෝනි මාර්ගයේ බාහිර ප්‍රදේශය උණුසුම් ජලය සහ මෘදු, සුවඳ නැති සබන් යොදා සෝදන්න. 
යෝනි මාර්ගය තුළ සබන් දැමීමෙන් වළකින්න. යෝනි මාර්ගය ස්වභාවික ස්‍රාවයන් මගින් පිරිසිදු කර ස්වභාවික pH 47 සමතුලිතතාවයක් පවත්වා ගනී. යෝනි මාර්ගයට සබන් දැමීමෙන් මෙම සමතුලිතතාවය විනාශ විය හැකිය.
මෘදු, සම්පූර්ණයෙන්ම වියලන ලද තුවායක් සමඟ ලිංගික ප්‍රදේශය වියලීමට හරින්න. සෑම දින දෙකකට වර උණුසුම් ජලය තුළ තුවාය සෝදන්න.
ලිංගික ප්‍රදේශය ස්පර්ශ කිරීමෙන් පසු ඔබගේ දෑත් සබන් යොදා සෝදන්න.
යෝනි මාර්ගය ස්පර්ශ කිරීමට පෙර ඔබේ දෑත් සෝදා වියළා ගන්න.

</p>
</section>
<br></br>

<section>

  <h2 className="text-xl font-semibold">ශිෂ්ණය  පිරිසිදු කිරීම සඳහා, ඔබට:</h2>
  <p className="mt-2 text-justify">
  දිනපතා සෝදන්න: සෑම දිනකම උණුසුම් ජලය සමග ඔබේ ලිංගය මෘදු ලෙස සෝදන්න.
මෘදු සබන් භාවිතා කරන්න: ඇල්කොහොල් සහ සුවඳ විලවුන් අඩංගු කොලෝන්, ඩියෝඩ්‍රන්ට්, බොඩි වොෂ්, දියර හෝ මොයිස්චරයිසර් වලින් වළකින්න.
පෙර සම යට පිරිසිදු කරන්න: ඔබ චර්මච්ඡේදනය කර නොමැති නම්, පෙරසම මෘදු ලෙස පසුපසට ගෙන යටින් පිරිසිදු කරන්න.
ස්ක්‍රබ් කිරීමෙන් වළකින්න: සංවේදී සම කෝපයට පත් විය හැකි බැවින්, එම ප්‍රදේශය තදින් ඇතිල්ලීමෙන් වළකින්න.
මෘදු ලෙස වියළන්න: ඔබේ ලිංගයේ කෙළවර, ඔබේ පෙරසමට යටින් සහ ඔබේ ලිංගයේ ඉතිරි කොටස මෘදු ලෙස තට්ටු කරන්න.
පෙර සම ප්‍රතිස්ථාපනය කරන්න: ඔබ චර්මච්ඡේදනය කර නොමැති නම්, ඔබේ යට ඇඳුම් ඇඳීමට පෙර ලිංගයේ කෙළවරට ඉහළින් ඇති පෙර සම ප්‍රතිස්ථාපනය කරන්න.
අවශ්‍ය නම් නිතර සෝදන්න: ඔබට smegma විශාල ප්‍රමාණයක් තිබේ නම් හෝ එය දුගඳක් ඇත්නම්, ඔබට ඔබේ ලිංගය නිතර නිතර සේදීමට සිදුවේ.


</p>
</section>
<br></br>
<section>

  <h2 className="text-xl font-semibold">ලිංග අනන්‍යතාවය සහ ලිංගික දිශානතිය</h2>
<h3 className="text-2xl font-bold">ලිංග අනන්‍යතාවය</h3>
<br></br>
 <p className="mt-2 text-justify"> ස්ත්‍රී පුරුෂ සමාජභාවය යන්නෙන් අදහස් කරන්නේ යම් පුද්ගලයකුට තම ලිංගභේදය පිළිබඳ ගැඹුරින් දැනෙන හැඟීමයි, එය උපතේදී ඔවුන්ට පවරා ඇති ලිංගිකත්වය සමඟ සමපාත විය හැකි හෝ නොගැලපේ. එයට පුළුල් පරාසයක අනන්‍යතා ඇතුළත් වේ: </p> 
 <ul className="list-disc list-inside mt-4 space-y-2"> <li> <strong>Cisgender:</strong> කෙනෙකුගේ ස්ත්‍රී පුරුෂ භාවය උපතේදී ඔහුට පැවරී ඇති ලිංගිකත්වයට ගැළපෙන විට මෙලෙස හඳුන්වයි. </li> <li> <strong>සංක්‍රාන්ති ලිංගිකයන්:</strong> කෙනෙකුගේ ස්ත්‍රී පුරුෂ භාවය උපතේදී ඔවුන්ට පවරා ඇති ලිංගිකත්වයට වඩා වෙනස් වන විට මෙලෙස හඳුන්වයි. </li> <li> <strong>ද්විමය නොවන:</strong> පිරිමි හෝ ගැහැණු යන කාණ්ඩවලට දැඩි ලෙස නොගැලපෙන ස්ත්‍රී පුරුෂ අනන්‍යතාවයකි. </li> <li> <strong>ස්ත්‍රී පුරුෂ භාවය, ස්ත්‍රී පුරුෂ තරලය, හෝ ලිංගභේදය:</strong> ද්විමය වර්ණාවලියෙන් පිටත අනන්‍යතා විස්තර කිරීමට පුද්ගලයන් භාවිත කළ හැකි වෙනත් යෙදුම් කිහිපයකි. </li> </ul> </section>
<br></br>
 <section> <h2 className="text-2xl font-bold">ලිංගික දිශානතිය</h2> <p className="mt-2 text-justify"> ලිංගික දිශානතිය පුද්ගලයෙකුගේ චිත්තවේගීය, ආදර හෝ ලිංගික ආකර්ෂණය අන් අයට විස්තර කරයි. එය ස්ත්‍රී පුරුෂ සමාජභාවයෙන් ස්වාධීන වන අතර එයට ඇතුළත් වන්නේ: </p> <ul className="list-disc list-inside mt-4 space-y-2"> <li> <strong>විෂමලිංගික (කෙලින්):</strong> වෙනස් ලිංගයේ පුද්ගලයන් වෙත ආකර්ෂණය. </li> <li> <strong>සමලිංගික (සමලිංගික හෝ සමලිංගික):</strong> එකම ලිංගයේ පුද්ගලයන් වෙත ආකර්ෂණය. </li> <li> <strong>ද්විලිංගික:</strong> ස්ත්‍රී පුරුෂ භාවයකට වඩා වැඩි පුද්ගලයන් වෙත ආකර්ෂණය. </li> </ul> </section>
<br></br>
 <section>
   <div className="flex justify-center items-center">
    <img
      src={G10}
      alt="Illustration"
      className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
    />
  </div>
</section>
<br></br>
 <section> <h2 className="text-2xl font-bold">නිගමනය</h2> <p className="mt-2 text-justify"> ලිංගික සෞඛ්‍යය යනු ජීවිතයේ ශාරීරික, චිත්තවේගීය සහ සමාජීය මානයන් ඇතුළත් සමස්ත යහපැවැත්මේ වැදගත් අංගයකි. ආසාදන, අනපේක්ෂිත ගැබ් ගැනීම් සහ චිත්තවේගීය පීඩාවන් වැනි අවදානම් වලින් ආරක්ෂා වන අතරම පුද්ගලයන්ට ආරක්ෂිත, සම්මුතිවාදී සහ සම්පූර්ණ සබඳතා අත්විඳිය හැකි බව එය සහතික කරයි. අධ්‍යාපනය, සෞඛ්‍ය සේවා සඳහා ප්‍රවේශය සහ විවෘත සංවාද ප්‍රවර්ධනය කිරීමෙන්, අපට අපකීර්තිය බිඳ දැමිය හැකි අතර ඔවුන්ගේ ශරීර සහ සබඳතා පිළිබඳව දැනුවත් තීරණ ගැනීමට පුද්ගලයන්ට බලය ලබා දිය හැකිය. </p> <p className="mt-4 text-justify"> ලිංගික සෞඛ්‍යයට ප්‍රමුඛත්වය දීම විශ්වාසය, අන්‍යෝන්‍ය ගෞරවය සහ සතුට වර්ධනය කරයි, සෞඛ්‍ය සම්පන්න ප්‍රජාවන්ට සහ වඩාත් සාධාරණ සමාජයකට දායක වේ. මතක තබා ගන්න, ලිංගික සෞඛ්‍යය සඳහා ක්‍රියාශීලී ප්‍රවේශයක් ජීවිතයේ ගුණාත්මක භාවය වැඩි දියුණු කරනවා පමණක් නොව සෑම කෙනෙකුටම ගෞරවය, ගෞරවය සහ මානව හිමිකම් සඳහා සහාය වේ. </p> </section>

</main>
      </div>
    
  );
}
