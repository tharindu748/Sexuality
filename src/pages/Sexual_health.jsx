import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

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
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </div>

        <section>
          <h1 className="text-2xl font-bold text-center">ලිංගික සෞඛ්‍ය</h1>
          <p className="mt-4">
            ලෝක සෞඛ්‍ය සංවිධානය නිර්වචනය කරන ආකාරයට ලිංගික සෞඛ්‍ය යනු; කායික,
            මානසික, සමාජීය හා චිත්තවේගීය යහපැවැත්මේ තත්ත්වයකි. එය ලිංගිකත්වය,
            ලිංගික සම්බන්ධතා හා සතුට සහ ඉවසිලිමත් ලිංගික පූර්ණත්වය අරමුණු කරගනිමින්
            සෞඛ්‍යය ආරක්ෂා කරනු ලබයි.
          </p>
          <p className="mt-4">
            පුද්ගලයකු තම ශරීරය ආකර්ෂණීය ලෙස දකින ආකාරය, තම ශරීරය පිළිබඳව
            සන්සුන් හා ආරක්ෂිත විදිමින් හැසිරීමට හැකිවීම, යහපත් ලිංගික සම්බන්ධතා
            පවත්වාගෙන යාමේ හැකියාව යනවා යාසේ මනෝභාවයන් මනාව ඇතිකර ගැනීම
            ලිංගික සෞඛ්‍යයට අයත් වේ.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">ලිංගික සෞඛ්‍යය සහ ප්‍රජනක සෞඛ්‍යය අතර වෙනස</h2>
          <p className="mt-4">
            ලිංගික සෞඛ්‍යය සහ ප්‍රජනක සෞඛ්‍යය සමීපව සම්බන්ධ වන නමුත් වෙනස් පදනම්
            මත පිහිටා ඇත. පහත වගුවේ මෙම වෙනස්කම් සනිටුහන් වේ:
          </p>
          <div className="mt-8 overflow-x-auto">
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

        <section>
  <h2 className="text-xl font-semibold">ස්ත්‍රී පුරුෂ ලිංගික පද්ධති හදුනා ගනිමු.</h2>
  <p className="mt-4">
  ප්‍රජනක පද්ධතියේ ප්‍රධාන කාර්යය නව ජීවියකු බිහි කිරීමයි. ස්ත්‍රී සහ පුරුෂ ප්‍රජනක පද්ධතිවල ව්‍යුහය සහ ක්‍රියාකාරිත්වය එකිනෙකට වෙනස් වේ. ස්ත්‍රී සහ පුරුෂ ප්‍රජනක පද්ධති වලින් ජන්මාණු නිපද වේ. ස්ත්‍රී ජන්මාණු ඩිම්බ නම් වන අතර පුරුෂ ජන්මාණු ශුක්‍රාණු නම් වේ. ප්‍රජනක පද්ධතිය ළමා කාලයේ දී ක්‍රියාකාරී නොවේ. යොවුන් විය එළඹීමත් සමග ම ද්විතියික ලිංගිත ලක්ෂණ ඇති වන අතර ප්‍රජනක පද්ධති මගින් හෝර්මෝන නිපදවීම සහ පරිණත ජන්මාණු නිපද සිදු කරයි.
  </p>
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

<section>
  <h2 className="text-xl font-semibold">ඩිම්බකෝෂ</h2>
  <p className="mt-4">
  ස්ත්‍රී ජන්මාණු සෛල නිපදවීම සිදුකරනු ලබන්නේ ඩිම්බ කෝෂ මගිනි. ගැහැණු දරුවෙකු ඉපදෙන අවස්ථාවේ දී ඩිම්බ කෝෂයේ නොමේරු ඩිම්බ විශාල ගණනක් තැන්පත් වී ඇත. හැහැණු ළමයකු වැඩිවිය පැමිණීමෙන් පසු ඩිම්බයක් මෙරුණු තත්වයට පත් වී වීම පෝෂයෙන් මුදා හැරේ. මෙය ඩිම්බ මෝචනය නම් වේ. සෑම ඔසප් චක්‍රයකදීමය සාමාන්‍යයෙන් දින 28 කට වරක් මෙම ඩිම්බ මෝචන ක්‍රියාවලිය සිදු වේ.
  </p>
  <p>ඩිම්බකෝෂ මගින් සිදු කෙරෙන අනෙකුත් ප්‍රධාන කාර්ය වනුයේ ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටෙරෝන් හෝමෝන නිපදවීමයි.</p>
</section>

<section>
  <h2 className="text-xl font-semibold">පැලෝපීය නාල</h2>
  <p className="mt-4">
  පැලෝපීය නාල ඩිම්භකෝශ අසලින් ආරම්භ වන අතර දිගින් 10 cm පමණ වේ.එය ගර්භාෂයේ බිත්තිය හරහා ගමන් කර ගර්භාෂයේ කුහරය තුළට විවෘත වෙයි.ඩිම්බකෝෂ අසලදී පැලෝපීය නාල පුනීලාකාර  හැඩයක් ගන්නාඅතර ඩිම්බකෝෂය මද වශයෙන් ආවරණය කරයි .ඩිම්බකෝෂයෙන් මුදා හරින ඩිම්බ පැලෝපීය  නාලයේ පුනීලාකාර කෙලවරෙන් ඇතුළු වී පැලෝපීය  නාලය දිගේ ගර්භාෂය වෙත ගමන්කරයි.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold">ගර්භාශය</h2>
  <p className="mt-4">
  ගර්භාෂය ඇතුළු කුහරයක් සහිත පේෂීමය අවයවයකි.පැලෝපීය  නාලය දිගේ ගමන් කරන ඩිම්බය ශුක්‍රාණුවක් සමඟ සංසේචනය වුවහොත් එය පැලෝපීය නාලය  දිගේ පහළට පැමිණ ගර්භාෂය තුළ තැන්පත් වේ. කලලයක් පිළිසිඳ ගැනීමෙන් පසුව කලලය වර්ධනය වීමත් සමඟම ගර්භාෂය ක්‍රමයෙන් විශාල වේ. කලලයේ වර්ධනය සම්පූර්ණ වනතෙක් ගර්භාෂය මගින් පෝෂණය සහ ආරක්‍ෂාව සැපයීම සිදුකෙරේ.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold">යෝනි මාර්ගය</h2>
  <p className="mt-4">
  ගර්භාෂයේ සිට බාහිර ලිංගික අවයව දක්වා පිහිටා ඇති පේශීමය නාලයකි.සංසර්ගයේදී පිටවන ශුක්‍රාණු යෝනි මාර්ගය දිගේ පිහිනා ගොස් පැලෝපීය නාලයේදී ඩිම්බය සංසේචනය කරයි. එමෙන්ම වර්ධනය සම්පූර්ණ වූ භ්‍රඈණය යෝනි මාර්ගය දිගේ ගමන් කිරීමෙන් දරු ප්‍රසූතිය සිදුවේ.
  </p>
</section>


<section>
  <h2 className="text-xl font-semibold">ආර්තව චක්‍රය සහ ස්ත්‍රී ප්‍රජනක හෝර්මෝන.</h2>
  <p className="mt-4">
  ආර්තව චක්‍රයේ පළමු වන සතිය තුළ ඊස්ට්‍රජන් හෝර්මෝනය වැඩිපුර ශ්‍රාවය නිසා ගර්භාශයේ ඇතුළත බිත්තිය ඝනකමින් වැඩිවන අතර එහි රුධිර වාහිනී වැඩිපුර වර්ධනය වේ. චක්‍රයේ දාහතරවන දිනය පමණ වන විට පරිණත ඩිම්බය ඩිම්බ කෝෂයේ මතුපිටට පැමිණේ. ආර්තව චක්‍රයේ දින 14-28 දක්වා කාලය තුළ ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝර්මෝන ශ්‍රාවය ඉහළ යයි. ප්‍රොජෙස්ටරෝන් හෝර්මෝනය මගින් ගර්භාශයේ බිත්තිවල රුධිර වාහිනී තව දුරටත් වර්ධනය වේ. මෙසේ ගර්භාශ ඇතුළු බිත්තියේ ඇති වන වෙනස් කම් නිසා සංසේචනය සිදු වුව හොත් වැඩෙන කළලයට පෝෂණය සැපයීමට සුදුසු පරිසරයක් ඇති වේ. ඩිම්බය සංසේචනය සිදු නොවුව හොත් 24 වන දිනයේ දී පමණ ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝර්මෝන ශ්‍රාවය පහළ යාම සිදු වේ. එහි ප්‍රතිඵලයක් ලෙස ගර්භාශයේ ඇතුළු බිත්තිය බිඳ වැටේ. රුධිරය සමග බිඳුණු පටක යෝනි මාර්ගය තුළින් පිටවේ. මෙම ක්‍රියාවලිය ආර්තවය හෙවත් ඔසප් වීම ලෙස හැඳින් වේ. එය දින 3-4 ක් පමණ පවතී. ද්විතියික ලිංගික ලක්ෂණ ඇති වීමෙන් පසු වැඩිවියට පත්වීමත් සමග ආරම්භ වන ආර්තව චක්‍රය වයස 45-50 දක්වා සිදු වේ.
  </p>
  <p>ඩිම්බ කෝෂයෙන් නිපද වන ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝර්මෝන වලට අමතර ව පූර්ව පිටියුටරිය මගින් ශ්‍රාවය වන FSH සහ LH හෝර්මෝන මගින් ඩිම්බ පරිණත වීම සහ ඩිම්බ කෝෂවලින් හෝර්මෝන ශ්‍රාවය වීම කෙරෙහි බලපෑම් ඇති කරයි.</p>

</section>

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




      </div>
    </div>
  );
}
