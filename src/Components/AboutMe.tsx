import { Card, Carousel } from 'flowbite-react';
import React from 'react';
import myPhoto from '../assets/myPhoto.jpg';

interface AboutMeProps {
    texts: { [key: string]: string };
}

const AboutMe: React.FC<AboutMeProps> = ({ texts }) => {
    return (
        <div id='aboutMe' className="flex relative z-5 max-h-[90%] min-h-[60%] flex-row my-96 mt-30 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-8 border-solid border-black border-opacity-5 gap-10 justify-center content-center max-md:flex-col max-md:gap-3 ">
            <div className={`flex flex-col gap-3 bg-[#111d42] m-8 p-5 w-[90%] h-96 max-h-80 min-h-44 shadow-2xl border-solid rounded-2xl max-md:w-[70%] max-md:mx-auto max-md:my-8 max-md:h-56`}>
                <h1 className="dictionaryText text-xl size-auto font-bold text-center text-zinc-500 tracking-wider">
                    {texts["AboutMe_Title"]}
                </h1>
                <div className="border-t border-gray-500 items-center"></div>

                <div className="h-[100%] sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slide={false}>
                        {/* KARTA 1: O MNIE */}
                        <Card className="h-[100%] w-[70%] grow bg-slate-600 dark:bg-slate-700 flex" imgSrc={myPhoto} horizontal >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <span className='text-[#111d42]'>{texts["AboutMe_Greeting"]}</span> <span className='text-red-500'>{texts["AboutMe_Name"]}</span>
                            </h5>
                            <p className="font-normal text-gray-300 dark:text-gray-400">
                                {texts["AboutMe_WorkInfo"]} <span className='text-red-500'>Full-Stack Developer</span>. {texts["AboutMe_Focus"]} <span className='text-red-500'>{texts["AboutMe_WebAppSpan"]}</span>.
                            </p>
                        </Card>

                        {/* KARTA 2: O PROJEKCIE */}
                        <Card className="h-[100%] w-[60%] bg-slate-600 dark:bg-slate-700 flex">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <span className='text-[#111d42]'>{texts["AboutMe_ProjectTitle"]}</span>
                            </h5>
                            <p className="font-normal text-gray-300 dark:text-gray-400">
                                {texts["ProjectInfoWhyText"]} {texts["ProjectInfoHowText"]} <span className='text-red-500'>{texts["ProjectInfoHowText_Framework"]}</span>
                            </p>
                        </Card>

                        {/* KARTA 3: ZAINTERESOWANIA */}
                        <Card className="h-[100%] w-[60%] bg-slate-600 dark:bg-slate-700 flex">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <span className='text-[#111d42]'>{texts["AboutMe_InterestsTitle"]}</span>
                            </h5>
                            <p className="font-normal text-gray-300 dark:text-gray-400">
                                {texts["AboutMe_InterestsText"]} <span className='text-red-500'>{texts["AboutMe_InterestsSport"]}</span> {texts["AboutMe_Travel"]} <span className='text-red-500'>{texts["AboutMe_TravelSpan"]}</span> {texts["AboutMe_Hobbies"]} <span className='text-red-500'>{texts["AboutMe_HobbiesSpan"]}</span>
                            </p>
                        </Card>

                        {/* KARTA 4: SPOTIFY */}
                        <Card className="h-[100%] w-[60%] bg-slate-600 dark:bg-slate-700 flex">
                            <iframe 
                                title='myFavPlaylist'
                                style={{ borderRadius: "12px" }} 
                                src="https://open.spotify.com/embed/playlist/3BEkbK08Jm7kHQsS4icfI5?utm_source=generator"
                                width="100%" 
                                height="352" 
                                frameBorder="0" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                            </iframe>
                        </Card>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;