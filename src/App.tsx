import DownloadCVHook from './Hooks/CVDownload';
import LanguageChangeHook from './Hooks/LanguageChange';
import { useEffect, useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react'
import { Badge, Card, Carousel, Footer, Timeline } from 'flowbite-react';
import myPhoto from './assets/myPhoto.jpg';
import { HiCheck, HiArrowCircleUp,HiMinusCircle,HiArrowNarrowRight,HiDocument } from 'react-icons/hi';


function App() {
  
  useEffect(() => {
    handleClickScroll("aboutMe");
  }, []); 
  
  let texts:  Record<string, string> = {};
  const lang = localStorage.getItem('lang')??"pl";
  const [isPhoneHovered, setPhoneHovered] = useState(false);
  const [isEmailHovered, setEmailHovered] = useState(false);
  const [isLinkedinHovered, setLinkedinHovered] = useState(false);
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
        {/* ABOUT */}   
        <div id='aboutMe' className="flex relative z-5 max-h-[90%] min-h-[60%] flex-row my-96 mt-30 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-8 border-solid border-black border-opacity-5 gap-10 justify-center content-center max-md:flex-col max-md:gap-3 ">
            <div className={`flex flex-col  gap-3 bg-[#111d42] m-8 p-5 w-[90%] h-96 max-h-80 min-h-44 shadow-2xl border-solid rounded-2xl max-md:w-[70%] max-md:mx-auto max-md:my-8 max-md:h-56`}> 
                <h1 className="dictionaryText text-xl size-auto font-bold text-center text-zinc-500 tracking-wider">O Mnie</h1>
              <div className="border-t border-gray-500 items-center"></div>
              
              <div className="h-[100%] sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
                  <Card className="h-[100%] w-[70%] grow bg-slate-600 dark:bg-slate-700 flex" imgSrc={myPhoto} horizontal >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className='text-[#111d42]'>Hej! Mam na imię</span> <span className='text-red-500'>Piotrek</span>
                    </h5>
                    <p className="font-normal  text-gray-300 dark:text-gray-400">
                      Mam 26 lat i aktualnie pracuję jako <span className='text-red-500'>Full-Stack Developer</span>. Ostatnio najwięcej czasu poświęcam na programowanie <span className='text-red-500'> Aplikacji Webowych</span>.
                    </p>
                  </Card>
                  <Card className="h-[100%] w-[60%] bg-slate-600 dark:bg-slate-700 flex">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className='text-[#111d42]'>Trochę o tym projekcie!</span>
                    </h5>
                    <p className="font-normal  text-gray-300 dark:text-gray-400">
                      {texts["ProjectInfoWhyText"]} {texts["ProjectInfoHowText"]} <span className='text-red-500'>{texts["ProjectInfoHowText_Framework"]}</span>
                    </p>
                  </Card>
                  <Card className="h-[100%] w-[60%] bg-slate-600 dark:bg-slate-700 flex">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className='text-[#111d42]'>Moje Zainteresowania!</span>
                    </h5>
                    <p className="font-normal  text-gray-300 dark:text-gray-400">
                      W wolnym czasie lubię uprawiać <span className='text-red-500'>sport</span>(siłownia,bieganie,tenis ziemny). Ostatnio przygotowuję się również do 5-tki Warszawskiej. W przyszłosci chciałbym oblecieć i <span className='text-red-500'>zwiedzić całą ziemię</span>. W wolnym czasie lubię <span className='text-red-500'>pograć</span> w gry lub odpalić dobry kryminał.
                    </p>
                  </Card>
                  <Card className="h-[100%] w-[60%] bg-slate-600 dark:bg-slate-700 flex">
                  <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/23S56j5Ct9eCT2ZQ0h2djm?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </Card>
                </Carousel>
              </div>
                
            </div>
        </div>
       
        {/* MOJE UMIEJĘTNOŚCI */}   
        <div id='mySkills' className="flex relative z-5 max-h-[90%] min-h-[60%] flex-row my-96 mt-28 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-8 border-solid border-black border-opacity-5 gap-10 justify-center content-center max-md:flex-col max-md:gap-3 ">
            <div className={`flex flex-col  gap-3 bg-[#111d42] m-8 p-5 w-[90%] h-96 max-h-80 min-h-44 shadow-2xl border-solid rounded-2xl max-md:w-[70%] max-md:mx-auto max-md:my-8 max-md:h-56`}> 
                <h1 className="dictionaryText text-xl size-auto font-bold text-center text-zinc-500 tracking-wider">Moje Umiejętności</h1>
              <div className="border-t border-gray-500 items-center"></div>
              <Carousel indicators={false}>
                <div className="h-[100%] w-[70%]  flex">
                  <div className='m-auto flex flex-wrap w-[50%] gap-1'>
                    <Badge size="l" color="success" icon={HiCheck}>HTML</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>JS</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>TS</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>CSS</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>Tailwind</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>JQuery</Badge>
                    <Badge size="l" color="warning" icon={HiMinusCircle}>FLUTTER</Badge>
                    <Badge size="l" color="purple" icon={HiArrowCircleUp}>REACT</Badge>
                  </div>
                  <div className='m-auto w-[50%] flex justify-center items-center'>
                    <p className='text-5xl font-bold'>
                      <span className="bg-gradient-to-r from-[#213b9b] to-red-500 text-transparent bg-clip-text">FRONTEND</span>
                    </p>
                  </div>
                </div>
                <div className="h-[100%] w-[70%] flex gap-1">
                  <div className='m-auto flex flex-wrap w-[50%] gap-1'>
                    <Badge size="l" color="success" icon={HiCheck}>.NET Core</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>.NET Framework</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>Entity Framework</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>REST API</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>FIRESTORE</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>SQL</Badge>
                  </div> 
                  <div className=' m-auto w-[50%] flex items-center justify-center'>
                    <p className='text-5xl font-bold'>
                      <span className="bg-gradient-to-r from-[#213b9b] to-red-500 text-transparent bg-clip-text">BACKEND</span>
                    </p>
                  </div>
                </div>
                <div className="h-[100%] w-[70%]  flex">
                  <div className='m-auto flex flex-wrap w-[50%] gap-1'>
                    <Badge size="l" color="success" icon={HiCheck}>GIT</Badge>
                    <Badge size="l" color="purple" icon={HiArrowCircleUp}>GCP</Badge>
                    <Badge size="l" color="success" icon={HiCheck}>AppSheet</Badge>
                    <Badge size="l" color="purple" icon={HiArrowCircleUp}>Google Script</Badge>
                  </div>
                  <div className=' m-auto w-[50%] flex items-center justify-center'>
                    <p className='text-5xl font-bold'>
                      <span className="bg-gradient-to-r from-[#213b9b] to-red-500 text-transparent bg-clip-text">INNE</span>
                    </p>
                  </div>
                </div>
              </Carousel>
                        
              <Footer.LinkGroup  className='bg-[#111d42] gap-1 justify-center flex '>         
                  <Badge color="success" icon={HiCheck}>Dobrze Znane</Badge>
                  <Badge color="warning" icon={HiMinusCircle}>Znam Podstawy</Badge>
                  <Badge color="purple" icon={HiArrowCircleUp}>Uczę Się Aktualnie</Badge>
              </Footer.LinkGroup>    
            </div>
            
        </div>

        {/* DOŚWIADCZENIE ZAWODOWE */}
        <div id='myExperience' className="flex relative z-5 min-h-[70vh] flex-row my-40 mt-4 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-6 border-solid border-black border-opacity-5 justify-center items-center max-md:flex-col">
          <div className="flex flex-col gap-5 bg-[#111d42] m-6 p-6 w-full max-w-4xl shadow-2xl rounded-3xl border border-white/10">
            <h1 className="dictionaryText text-xl size-auto font-bold text-center text-zinc-500 tracking-wider">Doświadczenie Zawodowe</h1>
            <div className="border-t border-gray-600 w-full mb-2"></div>

            {/* Kontener z przewijaniem */}
            <div className='flex flex-col overflow-y-auto max-h-[500px] pr-2 pl-8 pt-5 no-scrollbar'>
            <Timeline>
              {/* Najnowsze: Kwiecień 2022 */}
              <Timeline.Item>
                {/* Dodatkowo warto upewnić się, że Point ma swoje miejsce */}
                <Timeline.Point icon={HiCheck} className="bg-red-500 text-white" />
                <Timeline.Content>
                  <Timeline.Time className='text-red-400 font-bold text-lg'>Kwiecień 2022 - Obecnie</Timeline.Time>
                  <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                    E-Commerce UI Developer <span className="text-gray-400 text-sm font-normal">| Tailwind CSS Expert</span>
                  </Timeline.Title>
                  <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                    Projektowanie i wdrażanie dziesiątek komponentów webowych oraz interaktywnych elementów opartych na Tailwind CSS.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiDocument} />
                <Timeline.Content>
                  <Timeline.Time className='text-red-400 font-bold text-lg'>Sierpień 2021 - Marzec 2022</Timeline.Time>
                  <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                    Junior Web Developer
                  </Timeline.Title>
                  <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                    Praca nad pełnym cyklem życia produktu – od projektów w Figma po gotowy kod. Utrzymywanie spójności wizualnej między makietami a finalną wersją aplikacji.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiDocument} />
                <Timeline.Content>
                  <Timeline.Time className='text-red-400 font-bold text-lg'>Marzec 2019 - Lipiec 2021</Timeline.Time>
                  <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                    Starszy Konsultant Virgin Mobile
                  </Timeline.Title>
                  <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                    Profesjonalna obsługa i techniczne rozwiązywanie złożonych zgłoszeń klientów. Rozwój umiejętności komunikacyjnych i analitycznego myślenia pod presją czasu.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiDocument} />
                <Timeline.Content>
                  <Timeline.Time className='text-red-400 font-bold text-lg'>Marzec 2019 - Lipiec 2021</Timeline.Time>
                  <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                    Starszy Konsultant Virgin Mobile
                  </Timeline.Title>
                  <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                    Profesjonalna obsługa i techniczne rozwiązywanie złożonych zgłoszeń klientów. Rozwój umiejętności komunikacyjnych i analitycznego myślenia pod presją czasu.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>


      {/* KONTAKT */}
      <div id='contactCard' className="flex relative z-5 max-h-[90%] min-h-[60%] flex-row my-96 mt-30 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-8 border-solid border-black border-opacity-5 gap-10 justify-center items-center max-md:flex-col">
        <div className={`flex flex-col gap-3 bg-[#111d42] m-8 p-5 w-full max-w-5xl min-h-[350px] shadow-2xl border-solid rounded-2xl mx-4`}> 
          <h1 className="dictionaryText size-auto font-bold text-center text-zinc-500 text-xl">Kontakt</h1>
          <div className="border-t border-gray-500 mb-8"></div>

          <div className='flex flex-row flex-wrap md:flex-nowrap mx-auto gap-12 md:gap-16 items-start justify-center w-full'>
            
            {/* Linkedin */}
            <div className='flex flex-col items-center w-48'>
              <div 
                className='w-28 h-28 md:w-32 md:h-32 flex justify-center border-4 border-[#fcbb71] rounded-full items-center cursor-pointer 
                          transition-all duration-300 ease-in-out transform hover:scale-110 
                          hover:shadow-[0_0_25px_#fcbb71] bg-white overflow-hidden mb-4
                          motion-safe:animate-[pulse_3s_infinite]'
                onClick={() => setLinkedinHovered(!isLinkedinHovered)}
              >
                <img className='w-full h-full object-cover' alt="Linkedin icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Linkedin_circle.svg/512px-Linkedin_circle.svg.png" />
              </div>
              <div className="h-14 flex items-center justify-center text-center">
                <span className='text-red-500 font-bold'>
                  {!isLinkedinHovered ? "Linkedin" : <a href='https://www.linkedin.com/in/piotr-płaziński-2178a917b/' target='_blank' rel="noopener noreferrer" className="underline decoration-dotted">Przejdź do profilu</a>}
                </span>
              </div>
            </div>

            {/* Mail */}
            <div className='flex flex-col items-center w-64'>
              <div 
                className='w-28 h-28 md:w-32 md:h-32 flex justify-center border-4 border-[#fcbb71] rounded-full items-center cursor-pointer 
                          transition-all duration-300 ease-in-out transform hover:scale-110 
                          hover:shadow-[0_0_25px_#fcbb71] bg-white overflow-hidden mb-4
                          motion-safe:animate-[pulse_3s_infinite]'
                onClick={() => setEmailHovered(!isEmailHovered)}
              >
                <img className='w-[75%] h-[75%] object-contain' alt="Gmail icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Deus_Gmail.png/512px-Deus_Gmail.png" />
              </div>
              <div className="h-14 flex items-center justify-center text-center">
                <span className='text-red-500 font-bold whitespace-nowrap'>
                  {!isEmailHovered ? "E-Mail" : "piotrplazinski@gmail.com"}
                </span>
              </div>
            </div>

            {/* Telefon */}
            <div className='flex flex-col items-center w-48'>
              <div 
                className='w-28 h-28 md:w-32 md:h-32 flex justify-center border-4 border-[#fcbb71] rounded-full items-center cursor-pointer 
                          transition-all duration-300 ease-in-out transform hover:scale-110 
                          hover:shadow-[0_0_25px_#fcbb71] bg-white overflow-hidden mb-4
                          motion-safe:animate-[pulse_3s_infinite]'
                onClick={() => setPhoneHovered(!isPhoneHovered)}
              >
                <img className='w-full h-full object-cover scale-110' alt="Phone icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Pictograms-nps-emergency_telephone-2.svg/64px-Pictograms-nps-emergency_telephone-2.svg.png" />
              </div>
              <div className="h-14 flex items-center justify-center text-center">
                <span className='text-red-500 font-bold whitespace-nowrap'>
                  {!isPhoneHovered ? "Telefon" : "667 897 546"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
      

      
        
      <div className="mb-16 h-56 sm:h-64 xl:h-80 2xl:h-96">
       
      </div> 

          
      </div>
      <LanguageChangeHook language={lang}></LanguageChangeHook>
    </div>
  );
}

export default App;
