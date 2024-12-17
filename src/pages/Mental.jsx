import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import M1 from './Images/M1.jpg';
import M3 from './Images/M3.jpg';

export default function Mental() {
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
          <h1 className="text-2xl font-bold">ලිංගිකත්වය හා සම්බන්ධ මානසික යහපැවැත්ම</h1>
          <button
            onClick={toggleDarkMode2}
            className="text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>
        <main className="p-4">
        <section>
  <p className="mt-4 text-justify">
    “ලිංගික සෞඛ්‍යය යනු කෙනෙකුගේ ලිංගිකත්වයට අදාළව කායික, මානසික, චිත්තවේගීය සහ සමාජීය යහ පැවැත්මයි.” පුද්ගලයාගේ සාමාන්‍ය සෞඛ්‍ය, යහපැවැත්ම සහ සමස්ත ජීවන තත්ත්වය සඳහා මෙය අත්‍යවශ්‍ය සාධකයකි.
  </p>
  <p className="mt-4 text-justify">
    ලිංගික සෞඛ්‍යය සදහා, ලිංගිකත්වය සහ ලිංගික සම්බන්ධතාවන් ජීවිතයට ගෞරවනීය සහ ධනාත්මක ප්‍රවේශයක් එක් කරන අතර බලහත්කාරයෙන්, වෙනස් කොට සැලකීමෙන් සහ ප්‍රචණ්ඩත්වයෙන් තොරව ප්‍රසන්න සහ ආරක්ෂිත ලිංගික අත්දැකීම් ලබා ගැනීමේ හැකියාව පැවතීම මානසික සෞඛ්‍යට බලපානු ලබයි.
  </p>
 <h3 className="text-xl font-semibold mt-8">ලිංගිකත්වය සහ මානසික සෞඛ්‍යය අතර සම්බන්ධය</h3> 
 <p className="mt-4 text-justify"> ලිංගිකත්වය මානසික සෞඛ්‍යයට සැලකිය යුතු ලෙස බලපාන අතර විවිධ සාධක මෙම සම්බන්ධතාවයට දායක වේ. පුද්ගලයන්ගේ ලිංගික දිශානතිය පිළිබඳ අවබෝධය සහ පිළිගැනීම ඔවුන්ගේ මානසික යහපැවැත්මට බලපෑම් කළ හැකිය. ධනාත්මක ස්වයං - පිළිගැනීම බොහෝ විට වඩා හොඳ මානසික සෞඛ්‍ය ප්‍රතිඵලවලට තුඩු දෙන අතර, සමාජ අපකීර්තිය සහ වෙනස් කොට සැලකීම නිසා කාංසාව, මානසික අවපීඩනය සහ වෙනත් මානසික සෞඛ්‍ය ගැටලු ඇති විය හැක.</p>
 <p className='mt-4 text-justify'>කෙනෙකුගේ ලිංගභේදය සහ ලිංගික දිශානතිය ඔවුන්ගේ ලිංගික සෞඛ්‍යයට සහ මානසික සෞඛ්‍යයට සැලකිය යුතු බලපෑමක් ඇති කළ හැකිය. LGBTQIA+ ලෙස හඳුනා ගන්නා පුද්ගලයින් ඔවුන්ගේ ලිංගික සෞඛ්‍යයට සම්බන්ධ විශේෂිත අභියෝගවලට මුහුණ දිය හැකිය, එනම් LGBTQIA+ ඇතුළත් සෞඛ්‍ය ආරක්ෂණයට අපකීර්තිය හෝ ප්‍රවේශය නොමැතිකම වැනි දෑ හේතුවෙන් තවද, ලිංගභේද භූමිකාවන් සහ ලිංගිකත්වය වටා ඇති සමාජ සම්මතයන් සහ අපේක්ෂාවන් පුද්ගලයන් තම ලිංගික ආශාවන් සහ හැසිරීම් නිරීක්ෂණය කරන ආකාරය සහ ප්‍රකාශ කරන ආකාරය කෙරෙහි බලපෑ හැකිය. ලිංගික හා මානසික සෞඛ්‍යය අතර සම්බන්ධය සඳහා සම්බන්ධතා තත්ත්වය සහ තෘප්තිය ද බලපෑ හැකිය.</p>
 <p className='mt-4 text-justify'>මිනිසුන් බොහෝ විට ලිංගිකත්වය ගැන සිතනුයේ එය අපගේ ශරීරයේ සිදුවන දෙයක් ලෙසය, නමුත් අපගේ ලිංගික ජීවිතයෙන් වැඩි කොටසක් අපගේ මොළය හරහා සිදු වේ. සියලුම ලිංගභේදයන් සඳහා, අපගේ හැඟීම් සහ සිතුවිලි උද්දීපනය කිරීමේදී සහ එය පවත්වාගෙන යාමේදී වැදගත් කාර්යභාරයක් මොළය මඟින් සිදු කරනු ලැබේ.</p>
 <p className='mt-4 text-justify'>කාංසාව, මානසික අවපීඩනය හෝ වෙනත් මානසික සෞඛ්‍ය ගැටලු නිසා ලිංගිකව හැසිරීමට හෝ විනෝද වීමට හැකිවන අයුරින් මනස සැහැල්ලු කර ගැනීම අපහසු විය හැක. එය ආක්‍රමණශීලී අවධානය වෙනතකට යොමු කිරීම හෝ කනස්සල්ලෙන් යටපත් කරයි. පුද්ගලයෙකු අතිශයින් රෝගාතුර වූ විට සහ ක්‍රියා කිරීමට අපහසු වන විට, ලිංගිකත්වය මනසේ ඇත්තේ කලාතුරකිනි. මානසික රෝගවල ගැටුම, එහි විවිධ ආකාරවලින්, පුද්ගලයෙකුගේ ආත්ම අභිමානයට හානි කළ හැකි අතර, ඔවුන් ලිංගික අවධානයට සුදුසු නොවන බවක් දැක ගත හැකිය.</p>
 <p className='mt-4 text-justify'>මෙම සාධක ලිංගික සෞඛ්‍යය සහ මානසික සෞඛ්‍යය අතර සම්බන්ධතාවයට සැලකිය යුතු ලෙස බලපෑ හැකිය.</p>

</section>
 <br></br><div className="flex justify-center items-center">
  <img
    src={M1}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>
<br></br>


<section class="p-6 bg-gray-100 border-l-4 border-blue-500 text-gray-900">
  <h2 class="text-xl font-semibold text-blue-700">දැනුමට යමක්</h2>
  <p class="mt-4 leading-relaxed text-justify">
    “අන්තරාසර්ග සාධක, ස්නායු සම්ප්‍රේෂක සහ නියුරොපෙප්ටයිඩ යන සියල්ලම සංකීර්ණ ආකාරයකින් ලිංගික ක්‍රියාකාරිත්වයට මැදිහත් වන අතර බලපෑම් කරයි. අන්තරාසර්ග සාධක අතර එස්ටජන්, ඇන්ඩ්‍රොජන්, ප්‍රොජෙස්ටරෝන්, ඔක්සිටොසින්, ප්‍රෝලැක්ටින්, ෆෙරමෝන් සහ කෝටිසෝල් ඇතුළත් වේ. ලිංගික ක්‍රියාකාරිත්වයට සම්බන්ධ ස්නායු සම්ප්‍රේෂක, මූලික වශයෙන් ඩොපමයින්, සෙරොටොනින් සහ එපින්ෆ්‍රීන්, ප්‍රධාන මනෝචිකිත්සක ආබාධවල ව්‍යාධි භෞතවේදය සහ ඖෂධීය ප්‍රතිකාර සඳහා ද සම්බන්ධ වේ.”
  </p>
</section>
<section>
  <h3 className="text-xl font-semibold mt-8 text-justify">මානසික සෞඛ්‍ය පදනම් කරගෙන ඇතිවන රෝගයන්</h3>
  <p className="mt-4">මානසික සෞඛ්‍ය පදනම් කරගෙන ඇතිවන රෝගයන් කිහිපක් පහත පරිඳි දැක්විය හැක.</p>
  <ul className="list-disc list-inside mt-4 space-y-2">
    <li>
      <strong>භින්නෝන්මාදය:</strong> භින්නෝන්මාදයෙන් පෙළෙන රෝගීන් (ජනගහනයෙන් 1% ක් පමණ) රෝගයේ ස්වභාවය නිසා ලිංගික දුර්වලතාවලට ගොදුරු වීමේ වැඩි ඉඩක් ඇත. ඉදිරිපස බාහිකයේ හයිපෝ-ඩොපමිනර්ජික් ක්‍රියාකාරකම් නිසා ඇති වන ඇවොලිෂන්, ඇන්හෙඩෝනියාව සහ මොට බලපෑම වැනි ආබාධයේ සෘණාත්මක රෝග ලක්ෂණ ලිංගික ජීවිතය භුක්ති විඳීමේ හැකියාව දැඩි ලෙස අඩාල කරයි.
    </li>
    <li>
      <strong>මානසික අවපීඩනය:</strong> ජනගහනයෙන් 10% ක් පමණ ඔවුන්ගේ ජීවන තත්ත්වය සහ ක්‍රියාකාරිත්වය බරපතල ලෙස අඩාල කරන එපිසෝඩික් මානසික අවපීඩනයෙන් පෙළෙනවා. ලිබිඩෝ අඩුවීම ප්‍රධාන මානසික අවපීඩනය සමඟ නිතර සම්බන්ධ වේ. මානසික අවපීඩනයෙන් පෙළෙන පුද්ගලයින්ට ලිංගික ආශාව පවත්වා ගැනීමට හෝ සුරාන්තයට පත්වීමේ හැකියාව අඩු විය හැකිය. දැඩි මානසික අවපීඩනයෙන් පෙළෙන පිරිමින් තුළ, ශිෂේණය ඍජු වීමේ වේගය 90% දක්වා ළඟා විය හැකිය.
   </li>
  <li>
      <strong>කාංසාව:</strong>
 
    ලිංගික දුර්වලතා වර්ධනය කිරීමේදී කාංසාව සැලකිය යුතු කාර්යභාරයක් ඉටු කරයි. කාර්ය සාධනය පිළිබඳ කාංසාව ප්‍රසිද්ධ සංසිද්ධියකි, විශේෂයෙන් ශිෂේණය ඍජු ප්‍රතිචාරය සහ ශිෂේණය ඍජු වීමේ කල්පැවැත්ම ගැන කනස්සල්ලට පත්වන පිරිමින්. කාංසාව වැඩි කරන ශිෂේණය ඍජු අක්‍රියතාවයේ තවත් මනෝවිද්‍යාත්මක බලපෑමක් වන්නේ නර්සිසිස්ටික් කැළඹීමයි. පුද්ගලයාගේ ආත්ම අභිමානය දිගටම පිරිහීමට ලක් විය හැකි අතර, ඔහු සහ ඔහුගේ සහකරු ගැන සැලකිලිමත් වේ. මෙය පුද්ගලයාගේ චර්යාත්මක වෙනස්කම් වලට තුඩු දිය හැකිය, එනම් සමීප සබඳතා වළක්වා ගැනීම සහ කෝපය පිටවීම වැනි. මෙම සාධක වැඩි සාංකාව සහ ශිෂේණය ඍජු වීම සඳහා දායක වන අතර, එහි ප්රතිඵලයක් වශයෙන් අසාර්ථක වීමේ විෂම චක්රයක් සහ කාංසාව ඉහළ නංවයි.
  </li></ul>
</section>
<br></br><div className="flex justify-center items-center">
  <img
    src={M3}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>
<br></br>
<section >
  <h3 className="text-xl font-semibold mt-8">ලිංගිකත්වය සම්බන්ධ මානසික යහපැවැත්මේදී ඇතිවන ගැටළු අවම කර ගැනීමට ක්‍රියාමාර්ග</h3>
  <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
    <li><strong>විවෘත සන්නිවේදනය:</strong> ඔබේ සහකරු සමඟ ආශාවන්, සීමා මායිම් සහ උත්සුකයන් පිළිබඳ අවංක සහ ගෞරවනීය සාකච්ඡා දිරිමත් කරන්න. පැහැදිලි සන්නිවේදනය විශ්වාසය සහ අවබෝධය වර්ධනය කරයි.</li>
    <li><strong>අධ්‍යාපනය සහ දැනුවත් කිරීම:</strong> ලිංගික සෞඛ්‍යය, කැමැත්ත සහ චිත්තවේගීය යහපැවැත්ම පිළිබඳව ඔබ සහ ඔබේ සහකරු දැනුවත් කරන්න. මෙය වැරදි වැටහීම් අඩු කිරීමට සහ ලිංගිකත්වය සඳහා සෞඛ්‍ය සම්පන්න ප්‍රවේශයක් ඇති කිරීමට උපකාරී වේ.</li>
    <li><strong>ප්‍රතිකාර හෝ උපදේශනය:</strong> ප්‍රතිකාර සෙවීම, විශේෂයෙන් ලිංගික ප්‍රතිකාර හෝ සම්බන්ධතා උපදේශනය, කම්පනය, කාර්ය සාධනය පිළිබඳ කාංසාව හෝ ලිංගිකත්වය පිළිබඳ නිෂේධාත්මක විශ්වාසයන් වැනි යටින් පවතින ගැටළු වලට විසඳුම් ලබා දිය හැකිය.</li>
    <li><strong>කාර්ය සාධන පීඩනය අඩු කිරීම:</strong> කාර්ය සාධනය මත පමණක් නොව චිත්තවේගීය සම්බන්ධතාවය කෙරෙහි අවධානය යොමු කරන්න. "ක්‍රියාත්මක කිරීමට" ඇති පීඩනය අඩු කිරීමෙන් කාංසාව දුරු කළ හැකි අතර, වඩාත් සැහැල්ලුවෙන් හා ප්‍රීතිමත් අත්දැකීමකට මඟ පාදනු ලබයි.</li>
    <li><strong>සිහිකල්පනාව සහ ලිහිල් කිරීමේ ශිල්පීය ක්‍රම:</strong> ගැඹුරු හුස්ම ගැනීම, භාවනා කිරීම හෝ ප්‍රගතිශීලී මාංශ පේශි ලිහිල් කිරීම වැනි පුරුදු මගින් කාංසාව අඩු කර ගත හැකි අතර ලිංගික අත්දැකීම් වලදී ඔබට රැඳී සිටීමට උපකාරී වේ.</li>
    <li><strong>අපේක්ෂාවන් කළමනාකරණය කිරීම:</strong> ලිංගිකත්වය පිළිබඳ යථාර්ථවාදී අපේක්ෂාවන් තිබීම වැදගත් වේ. සමීපත්වය සැමවිටම පරිපූර්ණ හෝ අනාවැකි කිව නොහැකි බව හඳුනා ගැනීමෙන් පීඩනය අඩු කර වඩාත් ධනාත්මක අත්දැකීමක් ලබා ගත හැකිය.</li>
    <li><strong>සීමාවන්ට ගරු කිරීම:</strong> සෞඛ්‍ය සම්පන්න ලිංගික අත්දැකීමක් පවත්වා ගැනීමට සහ චිත්තවේගීය යහපැවැත්ම ආරක්ෂා කර ගැනීම සඳහා පුද්ගලික සීමාවන් ස්ථාපිත කිරීම සහ ගරු කිරීම අත්‍යවශ්‍ය වේ.</li>
    <li><strong>ශාරීරික සෞඛ්‍යය:</strong> නිතිපතා ව්‍යායාම කිරීම, සමබර ආහාර වේලක් සහ ප්‍රමාණවත් නින්දක් වඩා හොඳ මානසික සහ ශාරීරික සෞඛ්‍යයකට දායක වන අතර එය ලිංගික යහපැවැත්මට ධනාත්මක ලෙස බලපායි.</li>
    <li><strong>අතීත කම්පනය ආමන්ත්‍රණය කිරීම:</strong> අතීත ලිංගික කම්පන මානසික යහපැවැත්මට බලපාන්නේ නම්, ප්‍රතිකාර හෝ උපකාරක කණ්ඩායම් මගින් එය ආමන්ත්‍රණය කිරීමෙන් චිත්තවේගීය හා ලිංගික සෞඛ්‍යය සැලකිය යුතු ලෙස වැඩිදියුණු කළ හැකිය.</li>
    <li><strong>මත්ද්‍රව්‍ය අනිසි භාවිතය වැළැක්වීම:</strong> මත්පැන් හෝ විනෝදාත්මක මත්ද්‍රව්‍ය භාවිතය සීමා කිරීමෙන් ලිංගික අත්දැකීම්වලට සහ මානසික සෞඛ්‍යයට හානි කළ හැකි දුර්වල විනිශ්චය හෝ ලිබිඩෝ අඩුවීම වැනි ගැටලු වළක්වා ගත හැක.</li>
  </ul>
</section>

<section>
  <h3 className="text-xl font-semibold mt-8">සංවිධාන සහ ප්‍රයෝජනවත් සම්පත්</h3>
  <p className="mt-4 text-justify">
    මෙම උපාය මාර්ග කෙරෙහි අවධානය යොමු කිරීමෙන්, පුද්ගලයන්ට සහ ජෝඩුවලට ලිංගිකත්වය හා සම්බන්ධ ඔවුන්ගේ මානසික යහපැවැත්ම වැඩිදියුණු කළ හැකි අතර තමන් සහ ඔවුන්ගේ සහකරුවන් සමඟ වඩාත් සෞඛ්‍ය සම්පන්න, වඩාත් තෘප්තිමත් සම්බන්ධතාවයක් ඇති කර ගත හැකිය.
  </p>
  <p className="mt-4">මේ සඳහා තොරතුරු ලබාගත හැකි අංශයන් ලෙස.</p>
  <ul className="list-disc list-inside mt-4 space-y-2">
    <li>Trevor Project - LGBTQIA+ තරුණයින් සඳහා ලාභ නොලබන සංවිධානයකි.</li>
    <li>ජාතික Queer Asian Pacific Islander Alliance</li>
    <li>ද්විලිංගිකත්වය පිළිබඳ ඇමරිකානු ආයතනය.</li>
    <li>CenterLink - LGBTQIA+ ප්‍රජා මධ්‍යස්ථාන සොයා ගැනීමට ඔබට උදවු කරයි.</li>
    <li>සමානතා සම්මේලනය</li>
    <li>ආදරය යනු ගෞරවයයි - සෞඛ්‍ය සම්පන්න සබඳතා සහ ආලය අපයෝජනය පිළිබඳ තොරතුරු</li>
    <li>HIV පරීක්ෂණ අඩවි සහ සත්කාර සේවා ස්ථානගත කරන්නා.</li>
    <li>RAINN - ස්ත්‍රී දූෂණ අපයෝජනය සහ අනියම් සම්බන්ධතා ජාතික ජාලය</li>
  </ul>
  <br></br>
    <h2 className="text-xl font-semibold mb-4"> නිගමනය</h2>
    <p className='mt-2 text-justify '> 
    සමස්තයක් වශයෙන්, ලිංගිකත්වය හා සම්බන්ධ මානසික යහපැවැත්ම යනු පුද්ගල අනන්‍යතාවය, සමාජ බලපෑම්, සම්බන්ධතා ගතිකත්වය සහ අතීත කම්පන කෙරෙහි අවධානය යොමු කළ යුතු බහුවිධ ගැටලුවකි.
    මෙම අභියෝග ඵලදායී ලෙස සැරිසැරීමට පුද්ගලයන්ට උපකාර කිරීමේදී උපකාරක උපදේශන සහ චිකිත්සක භාවිතයන් ඉතා වැදගත් කාර්යභාරයක් ඉටු කරයි. අවබෝධය සහ පිළිගැනීම ප්‍රවර්ධනය කරන ඇතුළත් පරිසරයක් පෝෂණය කිරීමෙන්, ඔවුන්ගේ ලිංගිකත්වය හා සම්බන්ධ ගැටලු සමඟ පොරබදමින් සිටින අයගේ මානසික යහපැවැත්ම වැඩි දියුණු කළ හැකිය.
    </p><br>
    </br>
</section>



        </main>
      </div>
    </div>
  );
}
