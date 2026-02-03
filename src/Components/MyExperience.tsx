import { Timeline } from 'flowbite-react';
import React from 'react';
import { HiCheck, HiDocument } from 'react-icons/hi';

interface MyExperienceProps {
    texts: { [key: string]: string };
}

const MyExperience: React.FC<MyExperienceProps> = ({ texts }) => {
    return (
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
    );
};

export default MyExperience;