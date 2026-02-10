import { Badge, Carousel, Footer } from 'flowbite-react';
import React from 'react';
import { HiArrowCircleUp, HiCheck, HiMinusCircle } from 'react-icons/hi';

interface MySkillsProps {
    texts: { [key: string]: string };
}

const MySkills: React.FC<MySkillsProps> = ({ texts }) => {

    return (
        <div id='mySkills' className="flex relative z-5 max-h-[90%] min-h-[60%] flex-row my-96 mt-28 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-8 border-solid border-black border-opacity-5 gap-10 justify-center content-center max-md:flex-col max-md:gap-3 ">
            <div className={`flex flex-col gap-3 bg-[#111d42] m-8 p-5 w-[90%] h-96 max-h-80 min-h-44 shadow-2xl border-solid rounded-2xl max-md:w-[70%] max-md:mx-auto max-md:my-8 max-md:h-56`}>
                <h1 className="dictionaryText text-xl size-auto font-bold text-center text-zinc-500 tracking-wider">
                    {texts["Skills_Title"]}
                </h1>
                <div className="border-t border-gray-500 items-center"></div>
                
                <Carousel indicators={false}>
                    {/* FRONTEND */}
                    <div className="h-[100%] w-[70%] flex">
                        <div className='m-auto flex flex-wrap w-[50%] gap-1'>
                            <Badge size="l" color="success" icon={HiCheck}>HTML</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>JS</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>TS</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>CSS</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>Tailwind</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>JQuery</Badge>
                            <Badge size="l" color="warning" icon={HiMinusCircle}>FLUTTER</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>REACT</Badge>
                        </div>
                        <div className='m-auto w-[50%] flex justify-center items-center'>
                            <p className='text-5xl font-bold'>
                                <span className="bg-gradient-to-r from-[#213b9b] to-red-500 text-transparent bg-clip-text">
                                    {texts["Skills_Frontend"]}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className="h-[100%] w-[70%] flex gap-1">
                        <div className='m-auto flex flex-wrap w-[50%] gap-1'>
                            <Badge size="l" color="success" icon={HiCheck}>.NET Core</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>.NET Framework</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>Entity Framework</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>LINQ</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>REST API</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>FIRESTORE</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>SQL</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>Clean Architecture</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>JWT Auth</Badge>
                        </div>
                        <div className='m-auto w-[50%] flex items-center justify-center'>
                            <p className='text-5xl font-bold'>
                                <span className="bg-gradient-to-r from-[#213b9b] to-red-500 text-transparent bg-clip-text">
                                    {texts["Skills_Backend"]}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* INNE */}
                    <div className="h-[100%] w-[70%] flex">
                        <div className='m-auto flex flex-wrap w-[50%] gap-1'>
                            <Badge size="l" color="success" icon={HiCheck}>GIT</Badge>
                            <Badge size="l" color="purple" icon={HiCheck}>GCP</Badge>
                            <Badge size="l" color="success" icon={HiCheck}>AppSheet</Badge>
                            <Badge size="l" color="purple" icon={HiArrowCircleUp}>Google Script</Badge>
                            <Badge size="l" color="purple" icon={HiArrowCircleUp}>Docker / Terraform</Badge>
                        </div>
                        <div className='m-auto w-[50%] flex items-center justify-center'>
                            <p className='text-5xl font-bold'>
                                <span className="bg-gradient-to-r from-[#213b9b] to-red-500 text-transparent bg-clip-text">
                                    {texts["Skills_Other"]}
                                </span>
                            </p>
                        </div>
                    </div>
                </Carousel>

                {/* LEGENDA */}
                <Footer.LinkGroup className='bg-[#111d42] gap-1 justify-center flex '>
                    <Badge color="success" icon={HiCheck}>{texts["Skills_Legend_WellKnown"]}</Badge>
                    <Badge color="warning" icon={HiMinusCircle}>{texts["Skills_Legend_Basics"]}</Badge>
                    <Badge color="purple" icon={HiArrowCircleUp}>{texts["Skills_Legend_Learning"]}</Badge>
                </Footer.LinkGroup>
            </div>
        </div>
    );
};

export default MySkills;