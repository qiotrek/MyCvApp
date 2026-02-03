import DownloadCVHook from './Hooks/CVDownload';
import LanguageChangeHook from './Hooks/LanguageChange';
import { useEffect, useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react'
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import MyExperience from './Components/MyExperience';
import Contact from './Components/Contact';


function App() {
  
  useEffect(() => {
    handleClickScroll("aboutMe");
  }, []); 
  
  let texts:  Record<string, string> = {};
  const lang = localStorage.getItem('lang')??"pl";
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const textsContent = localStorage.getItem('textsContent');

  if (textsContent) {
    texts= JSON.parse(textsContent);
  } 
  const handleClickScroll = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block:'center' });
    }
  };
  return (
    // <div className="flex flex-col overflow-hidden bg-fixed" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg.jpg)` }}>
    <div className="flex flex-col overflow-hidden bg-fixed bg-slate-800" >
       {/* <nav className="max-h-18 bg-cover fixed flex w-screen gap-8 justify-between px-5 z-10" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg.jpg)` }}> */}
       <nav className="max-h-18 bg-cover fixed flex w-screen gap-8 justify-between px-5 z-10 bg-inherit">
        <DownloadCVHook />
        {/* Burger menu */}
        <div className="flex items-center">
          <button
            className="text-white block md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
             <Hamburger size={25} color='rgb(239 68 68)' duration={0.8} toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        {/* End of Burger menu */}

        {/* List of links */}
        <div className={`md:flex ${isMenuOpen ? "flex" : "hidden"} md:items-center md:w-auto w-full`}>
          <div className="md:flex flex-col md:flex-row md:ml-auto">
          <button className="hover:scale-105  m-4 text-red-500 font-bold rounded-2xl cursor-pointer" onClick={()=>handleClickScroll("aboutMe")}><span className='p-2'>{texts["AboutMe"]}</span></button>
            <button className="hover:scale-105 m-4 text-red-500 font-bold hover:cursor-pointer" onClick={()=>handleClickScroll("mySkills")}>{texts["MySkills"]}</button>
            <button className="hover:scale-105 m-4 text-red-500 font-bold hover:cursor-pointer" onClick={()=>handleClickScroll("myExperience")}>{texts["ProfessionalExperience"]}</button>
            <button className="hover:scale-105 m-4 text-red-500 font-bold hover:cursor-pointer" onClick={()=>handleClickScroll("contactCard")}>{texts["Contact"]}</button>
          </div>
        </div>
        {/* End of List of links */}
      </nav>

      
      <div id="bg" className="min-h-screen gap-64 relative top-14 items-center bg-cover justify-center " >
        {/* ABOUT ME */}   
        <AboutMe texts={texts}/>
       
        {/* MY SKILLS */}   
        <MySkills texts={texts}/>

        {/* DOŚWIADCZENIE ZAWODOWE */}
        <MyExperience texts={texts}/>

        {/* KONTAKT */}
        <Contact texts={texts}/>
        
      <div className="mb-16 h-56 sm:h-64 xl:h-80 2xl:h-96">
       
      </div> 

          
      </div>
      <LanguageChangeHook language={lang}></LanguageChangeHook>
    </div>
  );
}

export default App;
