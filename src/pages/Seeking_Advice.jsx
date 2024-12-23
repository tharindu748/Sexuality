import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import fpa from './Images/fpa.jpg';
import a2 from './Images/a2.jpg';
import a3 from './Images/a3.jpg';
import a4 from './Images/a4.jpg';
import a5 from './Images/a5.jpg';
import a6 from './Images/a6.jpg';

const SeekingAdvice = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold">ලිංගික සෞඛ්‍ය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීම</h1>
        <button
          onClick={toggleDarkMode}
          className="text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>
      <main className="p-4">
        <section>
          {/* <h2 className="text-xl font-semibold mb-4">ලිංගික සෞඛ්‍ය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීම</h2> */}
          <p>
            <strong>හැඳින්වීම:</strong> තරුණ වැඩිහිටියන් (වයස 20-27) සඳහා ලිංගික සෞඛ්‍ය පිළිබඳව පවතින ගැටලු හා ඒ සම්බන්ධිත කරුණු පිළිබඳව
            උපදෙස් ලබා ගැනීම සිදුකළ යුතු ආකාරය, උපදෙස් ලබා ගත හැකි ආයතන හා සේවා පිළිබඳව ඉදිරිපත් කිරීම මෙහිදි සිදු කරනු ලබයි.
          </p>
          <p className="mt-2 text-justify">
          ලිංගිකත්වයට අදාළ කායික, චිත්තවේගීය සහ මානසික යහපැවැත්මේ තත්ත්වය ලිංගික සෞඛ්‍යයි.
           ධනාත්මක හා ගෞරවනීය සබඳතා පැවැත්වීම, ලිංගික අවශ්‍යතා හා ආශාවන් පිළිබඳව ඵලදායි ලෙස සන්නිවේදනය කිරීමට හැකිවීම සහ කෙනෙකුගේ
          ලිංගික සෞඛ්‍ය පිළිබඳ තේරුම් ගැනීමට ඇති හැකියාව මෙයට ඇතුළත් වේ. යෞවනයන් විශේෂයෙන්ම තරුණ වැඩිහිටියන් බොහෝ විට විවිධ ලිංගික 
           අභියෝගවලට මුහුණ දෙති. මෙවැනි වාතාවරණයන් විශ්ව විද්‍යාල තරුණ පිරිස්  අතර ද හඳුනාගත හැකි අතර එලෙස මුහුණ දෙන ලිංගික සෞඛ්‍ය කරුණු
            හෙවත් පොදු ගැටලු කීපයක් හඳුනාගත හැකිය.
            <ul className="list-disc pl-5 mt-2">
            <li>අනාරක්ෂිත ලිංගික සංසර්ගය</li>
            <li>ලිංගාශ්‍රිත රෝග (ක්ලැමීඩියා, ගොනෝරියා, HIV)</li>
            <li>අනපේක්ෂිත ගැබ් ගැනීම්  </li>
            <li>ලිංගික ඇබ්බැහි වීම්  </li>
            <li>ලිංගික දුර්වලතා ( උදාහරණයක් ලෙස, ශිෂ්ණයේ සෘජු වීම, යෝනි මාර්ගයේ වියළි බව )</li>
            <li>සබැඳි ලිංගික ක්‍රියාකාරකම්වල වැඩිවීම </li>
            <li>තම ශරීර වර්ධනයන් පිළිබඳව පවතින කරුණ </li>
          </ul><br></br>


          </p>
          <p className='mt-2 text-justify'>
          මේ ආදී නොයෙකුත් ආකාරයේ අභියෝගවලට මුහුණ දීමට සිදුවී ඇත. තරුණ වැඩිහිටියන් මුහුණදෙනු ලබන
           මෙවැනි කාරණා සම්බන්ධව අද්‍යතනය වන විට එයට අවශ්‍ය උපදෙස් ලබා ගැනීම් සිදුකළ හැකිය. එනම් මෙවැනි තත්ත්වයන් අවම කර ගැනීමට /
            කළමනාකරණය කර ගැනීමට උපදෙස් ලබා ගැනීම ඉතාම වැදගත් වේ. නමුත් බොහොමයක් දෙනා අදාළ උපදෙස් ලබා ගැනීම් ප්‍රතික්ෂේප කිරීමක් හෝ 
            එයට මැලිකමක් දැක්වීම 
          සිදුකරන අතර එමගින් ඔවුන්ගේ මානසික සෞඛ්‍යයට ද අහිතකර අන්දමින් බලපෑම් කිරීමක් සිදුකරනු ලබයි.</p>
        </section>
        <p className='mt-2'>
        කෙසේ වුවද, ඔබට සහ මා හට මෙම ලිංගික සෞඛ්‍ය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීම සඳහා අද වන
         විට නොයෙකුත් ආකාරයේ සේවාවන් ලබා ගැනීමේ ඉඩ ප්‍රස්ථාවන් විවර වී පවතී.
         එවැනි උපදෙස් ලබාගත හැකි ක්‍රමෝපායන් කිහිපයක් පහත පරිදි පෙන්වා දිය හැක.
         </p>
         <section className="mt-6">
      <h2 className="text-xl font-semibold mb-4">පවුල් සෞඛ්‍ය සංවිධාන සංගමය </h2>

      <div className="flex justify-center items-center gap-4 p-4">
  <img
    src={fpa}
    alt="FPA Logo"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"  u can extend gap beetween image 
  />
  <img
    src={a2}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>
<p>
මෙකී සංවිධාන මගින් ඔබගේ ලිංගික සෞඛ්‍ය පිළිබඳ අවබෝධයක් ලබා ගැනීම හා ඒ සඳහා වෛද්‍ය සහ උපදේශන සේවා ලබා ගැනීමටත් හැකියාව ලැබේ. විශේෂයෙන්ම, මෙහිදී 
</p>

<ul className="list-disc pl-5 mt-2 text-justify">
            <li>අනාරක්ෂිත ගැබ් ගැනීම් වලින් වැළකීමට හදිසි උපාත් පාලන පෙති ලබා ගැනීම හා ඒ සම්බන්ධව උපදෙස් </li>
            <li>අනාරක්ෂිත ලිංගික සංසර්ගයකදී ඇති විය හැකි හානිදායක තත්ත්වයන් හා එහිදී ලැබිය යුතු උපදෙස් </li>
            <li>විශ්වාසදායක උපත් පාලන ක්‍රම තෝරා ගැනීම </li>
            <li>ඔබගේ ඔසප් කාලය පිළිබඳව හා සම්බන්ධිත විශේෂිත කරුණු   </li>
          
          </ul>

        
          <p className="mt-4 text-justify">
    මේ ආදී නොයෙකුත් ආකාරය කරුණු පිළිබඳ උපදෙස් ලබා ගැනීමට හැකියාව පවතින අතර තරුණ වැඩිහිටියන් විසින් නොදන්නා කරුණු රැසක් පිළිබඳව තමන්ට අවශ්‍ය උපදේශන ලබා ගැනීම සඳහා මෙවැනි පවුල් සෞඛ්‍ය සංවිධාන වලට යොමුවිය හැකිය. එමෙන්ම අද වන විට මෙකී උපදෙස් ලබා ගැනීම අන්තර්ජාල වෙබ් අඩවි මඟින් ද සිදුකළ හැකිය.

  
    Visit: 
    <a 
      href="https://www.fpasrilanka.org" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-600 underline hover:text-blue-800"
    >
      https://www.fpasrilanka.org
    </a>
  </p>
</section><br></br>

<section className="mt-8">
    <h2 className="text-xl font-semibold mb-4">සෞඛ්‍ය සේවා සපයන්නන්</h2>
    <p className='text-justify'>
      ප්‍රාථමික සත්කාර වෛද්‍යවරුන්, නාරිවේද වෛද්‍යවරුන් සහ අනෙකුත් සෞඛ්‍ය සේවා සපයන්නන්ගෙන් ලිංගික සෞඛ්‍ය කරුණ සඳහා අවශ්‍ය
      උපදෙස් හා ප්‍රතිකාර ලබාගත හැකිය. විශේෂයෙන්ම මෙහිදී ඔබලාගේ ඔසප් වීම් පිළිබඳව ගැටලු, යෝනි ශ්‍රාව්‍ය, ආර්ථවාභාවය,
      මුත්‍රා කිරීමේදී ඇතිවන ගැටලු ආදිය පිළිබඳව උපදෙස් ලබාගැනීමට හැකියාව ලැබේ.
    </p>
    <br></br><div className="flex justify-center items-center">
  <img
    src={a3}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>

  </section>
  <section className="mt-8">
    <h2 className="text-xl font-semibold mb-4">ලිංගික සෞඛ්‍ය සායන</h2>
    <p className='text-justify'>
      අද්‍යතනය වන විට මෙම ලිංගික සෞඛ්‍ය පිළිබඳව පවත්වනු ලබන සායනයන් බොහොමයක් පවතී. තරුණ වැඩිහිටියන් වන ඔබට මෙහිදී
      අවශ්‍ය උපදෙස් ලබා ගැනීමේ හැකියාව පවතී.
    </p>
    <ul className="list-disc pl-5 mt-2 text-justify">
      <li>ලිංගිකව සම්ප්‍රේෂණය වන ආසාදන (ලිංගාශ්‍රිත රෝග) සඳහා උපදේශනය</li>
      <li>ශ්‍රී ලංකා ජාතික ලිංගාශ්‍රිත රෝග හා ඒඩ්ස් මර්දන වැඩසටහන්</li>
    </ul>
    <div className="flex justify-center items-center gap-4 p-4">
  <img
    src={a4}
    alt="FPA Logo"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"  u can extend gap beetween image 
  />
  <img
    src={a5}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>
    <p className="mt-2 text-justify">
      මෙහිදී, HIV, ලිංගාශ්‍රිත රෝග, ප්‍රජනක පද්ධති ආසාදනය, වඳභාවය, අනාරක්ෂිත ගැබ් ගැනීම්, හා ගබ්සා කිරීම, ලිංගික දුර්වලතා,
      ගැහැණු ලිංගික අවයව ඡේදනය ආදී නොයෙකුත් කරුණු සඳහා උපදෙස් ලබා ගැනීමට හැකියාව පවතී.
    </p>
    <p className="mt-2 text-justify">
      රෝග පාලනය සහ වැළැක්වීමේ මධ්‍යස්ථාන, සැලසුම් කළ මාතෘත්වය සහ ලිංගික සෞඛ්‍ය සංගම් වැනි සංවිධාන ලිංගික සෞඛ්‍ය පිළිබඳ උපදෙස්
      ලබා ගැනීම සඳහා ප්‍රවේශයන් පුළුල් කර ඇත. එපමණක් නොව තරුණ වැඩිහිටියන් සඳහා ක්ෂණික ඇමතුම් සේවාවන් ද සපයා ඇත.
    </p>
  </section>
  <section className="mt-8 ">
    <h2 className="text-xl font-semibold mb-4">ජාතික ලිංගාශ්‍රිත රෝග ක්ෂණික ඇමතුම් අංක (0 112 667 163 )</h2>
    <p className='text-justify'>
    මේ ඔස්සේ ඔබගේ ලිංගික සෞඛ්‍ය කරුණු වලට අදාළව රහස්‍යභාවය ද සුරකමින් ඒ අවශ්‍ය උපදෙස් සේවාව ලබාදීමක් සිදුකරනු ලබයි.
    ආලෝකා උපදේශන මධ්‍යස්ථානය අද වනවිට ලාංකික
     සන්දර්භය තුළ පිහිටුවා ඇති අතර ඒ තුළින් ඔබහට යම්කිසි ලිංගික සෞඛ්‍ය කරුණකට අදාළ උපදෙස් ලබා ගැනීමේ හැකියාව පවතී.
     අද්‍යතනය වන විට මෙම ලිංගික සෞඛ්‍ය පිළිබඳව පවත්වනු ලබන සායනයන් බොහොමයක් පවතී. තරුණ වැඩිහිටියන් වන ඔබට මෙහිදී
      අවශ්‍ය උපදෙස් ලබා ගැනීමේ හැකියාව පවතී.
    </p>
    <br></br>
    <h2 className="text-xl font-semibold mb-4"> නිගමනය</h2>
    <p className='mt-2 text-justify'> 
    ලිංගික සෞඛ්‍ය පිළිබඳව තමන්ට ඇතිවන්නා වූ ඕනෑම තත්ත්වයකදී ඒ සඳහා උපදෙස් ලබා ගැනීමේ හැකියාව පවතී.
     එය ඕනෑම ආකාරයකින් සිදු කළ හැකිය. අද වන විට මෙම උපදෙස් ලබා ගැනීම සමාජ මාධ්‍ය තුළින්ද සිදු කිරිමේ ප්‍රවනතාවයක් පවතී. 
     තමන්ගේ ලිංගික සෞඛ්‍ය පිළිබඳ වැඩි අවධානයක් යොමු කිරීම මෙහිදී ඉතාමත් වැදගත් වන අතර එවිට තමන්ට පැනනගින 
     ලිංගේන්ද්‍රයන් සම්බන්ධ අභියෝග/ගැටලු පිළිබඳ උපදෙස් ලබා
     ගැනීම සඳහා ඉතා ඉක්මනින් ඉහත සඳහන් කළ අංශ හෝ සේවාවන් වෙත යොමුවීමට හැකිය.
    </p><br>
    </br>
    <div className="flex justify-center items-center">
  <img
    src={a6}
    alt="Illustration"
    className="rounded-lg shadow-md max-w-[200px] max-h-[200px]"
  />
</div>
  </section>

        </main>
    </div>
  );
};

export default SeekingAdvice;
