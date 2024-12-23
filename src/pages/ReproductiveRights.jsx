import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import I1 from './Images/I1.jpg';

export default function ReproductiveRights() {
  const [darkMode, setDarkMode] = useState(false);

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
        <h1 className="text-2xl font-bold">ප්‍රජනන අයිතිවාසිකම්</h1>
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

      <main className= "p-4">
<section>

<br></br>
<div className="flex justify-center items-center">
           <img
             src={I1}
             alt="Illustration"
             className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
           />
         </div>
<br></br>
</section>
 <p className="mt-2 text-justify"> පුද්ගලයන්ගේ ප්‍රජනන සෞඛ්‍ය හා ස්වාධිපත්‍යය පිළිබඳ දැනුවත් තීරණ ගැනීමට ඇති හැකියාව හා සම්බන්ධ නීතිමය, සමාජීය සහ සදාචාරාත්මක අයිතිවාසිකම් සමූහය ප්‍රජනන අයිතිවසිකම් ලෙස හදුන්වයි.</p> 
 <p className="mt-2 text-justify"> මෙම අයිතිවාසිකම් මගින් පුද්ගලයන්ට විශේෂයෙන්ම කාන්තාවන්ට ඔවුන්ගේ ප්‍රජනන ජීවිතය පාලනය කිරීමට සහ සහජීවනයෙන් යුත් සෞඛ්‍ය සම්පන්න පවුල් ජීවිතයක් ගත කිරීමට උදව් වේ.</p>
  <p className="mt-2 text-justify"> ප්‍රධාන වශයෙන් ප්‍රජනන අතිවාසිකම් ලෙස, </p> 
  <ol className="list-decimal list-inside mt-4 space-y-2 text-justify"> <li>පවුල් සැලසුම් කිරීමේ අයිතිය.</li>
   <li>දරු ප්‍රසූතිය තීරණය කිරීමේ අයිතිය.</li> <li>ආරක්ෂාකාරී සහ නිත්‍යානුකූල ගබ්සාවට ඇති අයිතිය.</li>
    <li>ලිංගික අධ්‍යාපනය ලැබීමට ඇති අයිතිය.</li> <li>ප්‍රජනක සෞඛ්‍ය සේවා සඳහා ප්‍රවේශ වීමේ අයිතිය.</li> 
    <li>ආරක්ෂිත සහ උපත් පාලන ක්‍රම වෙත ප්‍රවේශ වීමේ අයිතිය.</li> <li>පෞද්ගලිකත්වය සඳහා ඇති අයිතිය.</li>
     <li>සමාන්තර බාවය සහ කාන්තා ලිංගික ඡේදනයන්ගෙන් නිදහස් වීමට ඇති අයිතිය.</li> 
     <li>ප්‍රචණ්ඩත්වයෙන් ආරක්ෂාවීමේ අයිතිය.</li> <li>විද්‍යාත්මක ප්‍රගතිය භුක්ති විඳීමේ අයිතිය.</li>
      </ol>
  <h3 className="text-xl font-semibold mt-8">1. පවුල් සැලසුම් කිරීමේ අයිතිය</h3>
   <p className="mt-2 text-justify"> පවුල් ඒකකය සැලසුම් කිරීමේදී ආරක්ෂිත හා ඵලදායි උපත් පාලන ක්‍රම සඳහා ප්‍රවේශ වීම මෙහිදී සිදුවේ. එනම් විවාහපත් යුවළක් වදනා දරුවන් ප්‍රමාණය පිලිබද තීරණ ගැනීමට ඔවුනට ඇති අයිතියයි. </p> 
   <h3 className="text-xl font-semibold mt-8">2. දරු ප්‍රසූතිය තීරණය කිරීමේ අයිතිය</h3> 
   <p className="mt-2 text-justify"> එනම් මෙහිදි කාන්තාවට වැඩි අයිතියක් හිමි විය යුතුය. විවාහපත් වී කොපමණ කාලයකට පසුව දරුවකු වදනව ද හො නැද්ද යන්න තීරණය කිරීමට ඇති අයිතියයි. මෙහිදී ම දරුවන් කී දෙනෙක් සිටිය යුතුද, දරුවන් කොපමණ ප්‍රමාණයක් සිටිනවාද, දරුවන් අතර පරතරය, කවදාද යන්න තීරණය කිරීමේ නිදහසයි. </p> 
   <h3 className="text-xl font-semibold mt-8">3. ආරක්ෂාකාරී සහ නිත්‍යානුකූල ගබ්සාවට ඇති අයිතිය</h3> 
   <p className="mt-2 text-justify"> රටක නීත්‍යානුකූල, ආරක්ශාකාරී වෛද්‍ය හා ශල්‍ය ගබ්සා සේවා වෙත ප්‍රවේශ වීමට ඇති අයිතියයි. එමෙන්ම තම කැමැත්තකින් තොරව යම් පුද්ගලයකුගේ බලහත්කාරකම් වලින් සිදුකරනු ලබන ගබ්සාවලින් ආරක්ෂාවීමට ඇති අයිතිය‍යි. </p> 
   <h3 className="text-xl font-semibold mt-8">4. ලිංගික අධ්‍යාපනය ලැබීමට ඇති අයිතිය</h3>
    <p className="mt-2 text-justify"> ලිංගික සෞඛ්‍ය, ප්‍රජනන සෞඛ්‍ය, ස්ත්‍රී පුරුෂ සමානාත්මතාවය, නිවැරදි උපත්පාලනය, පවුල් සැලසුම් විධි, ලිංගික අයිතිවාසිකම් ... ආදිය දැන ගැනීමට ඇති අයිතියයි. විස්තීර්ණ සහ නිවැරදි ලිංගික අධ්‍යාපනයකට ප්‍රවේශ වීමට සහ ඒ පිළිබඳ දැනුම්වත් වීමට ලිංගික අධ්‍යාපන දැනුම මගින් හැකිවේ. </p> <h3 className="text-xl font-semibold mt-8">5. ප්‍රජනක සෞඛ්‍ය සේවා සඳහා ප්‍රවේශ වීමේ අයිතිය</h3>
    <p className="mt-2 text-justify"> පූර්ව ප්‍රසව සත්කාර, මාතෘ සත්කාර, පශ්චාත් ප්‍රසව සත්කාර ඇතුළු ගුණාත්මක ප්‍රජනන සෞඛ්‍ය සේවාවක් ලබා ගැනීමට ඇති අයිතියයි. එමෙන්ම ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන සඳහා ප්‍රතිකාර ලබා ගැනීමටත්, ස්ත්‍රී හෝ පුරුෂ යන දෙපාර්ශ්වයටම පවතින වඳ භාවය සඳහා ප්‍රතිකාර ලබා ගැනීමටත් ඇති අයිතියයි. </p> 
    <h3 className="text-xl font-semibold mt-8">6. ආරක්ෂිත සහ උපත් පාලන ක්‍රම වෙත ප්‍රවේශ වීමේ අයිතිය</h3> 
    <p className="mt-2 text-justify"> කොණ්ඩම්, උපත් පාලන පෙති, අභ්‍යන්තර ගරභාශ(IUDs) ආදී ආරක්‍ෂාකාරී උපත්පාලන ක්‍රම සදහා යොමු වීමට ඇති අයිතියයි. </p> 
    <h3 className="text-xl font-semibold mt-8">7. පෞද්ගලිකත්වය සඳහා ඇති අයිතිය</h3> 
    <p className="mt-2 text-justify"> ප්‍රජනන සෞඛ්‍ය සේවා, තීරණ ලබාගැනීමේදී කාන්තාවන්ට දෙමාපිය අවසරය හෝ, සිය ස්වාමියාගේ අවසරය ලබාගැනීමක් නොකර තම පෞද්ගලිකත්වයට මුල් තැන දීමට ඇති අයිතිය හා බලහත්කාරකම්වලින් ආරක්ෂා වීමට ඇති අයිතියයි. ප්‍රජනන සෞඛ්‍ය සේවාවන්හි රහස්‍යභාවය පුද්ගලයන්ගේ පෞද්ගලිකත්වයට හේතු වේ. </p> <h3 className="text-xl font-semibold mt-8">8. සමාන්තර බාවය සහ කාන්තා ලිංගික ඡේදනයන්ගෙන් නිදහස් වීමට ඇති අයිතිය</h3> 
    <p className="mt-2 text-justify"> ස්ත්‍රී පුරුෂ භාවය, සමාජ ආර්ථික තත්ත්වය හෝ වාර් ගිකත්වය නොසලකා ප්‍රජනන සෞඛ්‍ය සේවා සඳහා සමාන ප්‍රවේශයක් ලබා ගැනීමට ඇති අයිතියයි. ළමා විවාහ හෝ කාන්තා ලිංගික ඡේදනය (FGM) වැනි හානිකර සංස්කෘතික භාවිතයන්ගෙන් ආරක්ෂාවීම මෙමගින් අරමුණු කරයි. </p>
        <section>
  <h3 className="text-xl font-semibold mt-8">ප්‍රජනන අයිතිවාසිකම්</h3>

  <h4 className="text-lg font-semibold mt-6">9. ප්‍රචණ්ඩත්වයෙන් ආරක්ෂාවීමේ අයිතිය</h4>
  <p className="mt-2 text-justify">
    ගෘහස්ථව හෝ පරිබාහිරව සිදුවන ලිංගික ප්‍රචණ්ඩත්වයන්, ලිංගික හිංසනය, ලිංගික අපයෝජනය, ලිංගික අඩත්තේට්ටම්, ප්‍රජනනය පදනම් කොටගත් කායික හා මානසික හිංසන, සූරාකෑම් ආදියට එරෙහිවීමට ඇති අයිතියයි.
  </p>

  <h4 className="text-lg font-semibold mt-6">10. විද්‍යාත්මක ප්‍රගතිය භුක්ති විඳීමේ අයිතිය</h4>
  <p className="mt-4">
    නව ප්‍රජනන සෞඛ්‍යතාක්ෂණයන් දැනගැනීමට, ප්‍රයෝජනවත් ලෙස භාවිතයට ඇති අයිතිය‍යි.
  </p>

  <h3 className="text-xl font-semibold mt-8">ප්‍රජනන අයිතිවාසිකම් වල වැදගත්කම</h3>
  <ul className="list-disc list-inside mt-4 space-y-2 text-justify">
    <li>
      <strong>සවිබල ගැන්වීම:</strong> 
      ප්‍රජනන අයිතීන් තම ජීවිතයට, සෞඛ්‍යයට සහ අනාගතයට බලපාන තේරීම් කිරීමට පුද්ගලයන්ට බලය ලබා දෙයි. එමගින් පෞද්ගලිකත්වය ආරක්ෂ වේ.
    </li>
    <li>
      <strong>සෞඛ්‍ය ප්‍රතිඵල ලැබීම:</strong>
      ප්‍රජනක සෞඛ්‍ය සේවා සඳහා ප්‍රවේශය අඩු වීම, මාතෘ සහ ළදරු මරණ අනුපාත පහල බැසීම ඇතුළුව, පුද්ගලයන් සහ පවුල් සඳහා වඩා හොඳ සෞඛ්‍ය ප්‍රතිඵල සමඟ සම්බන්ධ වේ.
    </li>
    <li>
      <strong>සමාජ සාධාරණත්වය ඇති වීම:</strong>
      සෞඛ්‍ය සේවයට ප්‍රවේශ වීමේදී සහ ප්‍රජනන තේරීම් කිරීමේදී ආන්තික කණ්ඩායම් මුහුණ දෙන අසමානතා ආමන්ත්‍රණය කරන බැවින් ප්‍රජනක අයිතිවාසිකම් සහතික කිරීම සමාජ සාධාරණත්වය පිළිබඳ කාරණයකි.
    </li>
    <li>
      <strong>ආර්ථික ස්ථායීතාවය ඇති වීම:</strong>
      ගැබ්ගැනීම් සැලසුම් කිරීමේ හැකියාව, මාතෘ සහ ළදරු මරණ අනුපාත අඩු වීම සහ පුද්ගලයන්ගේ සහ පවුල්වල ආර්ථික ස්ථාවරත්වයට දායක වන අතර, වඩා හොඳ අධ්‍යාපනික සහ වෘත්තීය අවස්ථා සඳහා ඉඩ සැලසීම මගින් පවුල, සමාජය, රට ආර්තික වශයෙන් ශක්තිමත් වීම.
    </li>
  </ul>
  
  <p className="mt-2 text-justify">
    මෙම අයිතිවාසිකම් ස්ත්‍රී පුරුෂ සමානාත්මතාවය සාක්ෂාත් කර ගැනීම සඳහා මූලික වශයෙන් පිළිගෙන ඇති අතර මානව හිමිකම් පිළිබඳව විශ්ව ප්‍රකාශනය සහ විවිධ ජාත්‍යන්තර ගිවිසුම් ඇතුළු පුළුල් මානව හිමිකම් සමඟ සම්බන්ධ වේ. කෙසේ වෙතත් ප්‍රජනන අයිතිවාසිකම් ක්‍රියාත්මක වීමේ දී සහ ආරක්ෂා කිරීමේදී විවිධ රටවල සහ සංස්කෘතීන් අනුව මේවා වෙනස් වේ.
  </p>



</section>
      </main>
    </div>
  );
}

