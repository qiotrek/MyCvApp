import { Timeline, Badge } from 'flowbite-react';
import React from 'react';
import { HiCheck, HiCode, HiUsers, HiLightningBolt } from 'react-icons/hi';

interface MyExperienceProps {
    texts: { [key: string]: string };
}

const MyExperience: React.FC<MyExperienceProps> = ({ texts }) => {
    return (
        <div id='myExperience' className="flex relative z-5 min-h-[70vh] flex-row my-40 mt-4 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-6 border-solid border-black border-opacity-5 justify-center items-center max-md:flex-col">
            <div className="flex flex-col gap-5 bg-[#111d42] m-6 p-6 w-full max-w-4xl shadow-2xl rounded-3xl border border-white/10">
                <h1 className="dictionaryText text-xl size-auto font-bold text-center text-zinc-400 tracking-wider uppercase">
                    {texts["Exp_Title"]}
                </h1>
                <div className="border-t border-gray-600 w-full mb-2"></div>

                <div className='flex flex-col overflow-y-auto max-h-[600px] pr-4 pl-8 pt-5 no-scrollbar'>
                    <Timeline>
                        {/* Web Developer - Auchan */}
                        <Timeline.Item>
                            <Timeline.Point icon={HiLightningBolt} className="bg-yellow-400 text-black" />
                            <Timeline.Content>
                                <Timeline.Time className='text-red-400 font-bold text-lg'>08.2023 – {texts["Exp_Present"]}</Timeline.Time>
                                <Timeline.Title className='text-white text-2xl font-bold mt-1'>
                                    {texts["Exp_WebDev_Title"]} <span className="text-gray-400 text-sm font-normal">| {texts["Exp_WebDev_Company"]}</span>
                                </Timeline.Title>
                                <div className="flex flex-wrap gap-2 my-2">
                                    <Badge color="info">React</Badge>
                                    <Badge color="info">Node.js</Badge>
                                    <Badge color="info">Razor Pages</Badge>
                                    <Badge color="info">API</Badge>
                                </div>
                                <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li>{texts["Exp_WebDev_Desc1"]}</li>
                                        <li>{texts["Exp_WebDev_Desc2"]}</li>
                                        <li>{texts["Exp_WebDev_Desc3"]}</li>
                                    </ul>
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>

                        {/* Freelance Project */}
                        <Timeline.Item>
                            <Timeline.Point icon={HiUsers} />
                            <Timeline.Content>
                                <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                                    {texts["Exp_Freelance_Title"]}
                                </Timeline.Title>
                                <Timeline.Body className="text-gray-400 mt-2 italic">
                                    {texts["Exp_Freelance_Desc"]}
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>

                        {/* Junior Web Developer - Auchan */}
                        <Timeline.Item>
                            <Timeline.Point icon={HiCode} />
                            <Timeline.Content>
                                <Timeline.Time className='text-red-400 font-bold text-lg'>09.2021 – 08.2023</Timeline.Time>
                                <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                                    {texts["Exp_Junior_Title"]} <span className="text-gray-400 text-sm font-normal">| {texts["Exp_WebDev_Company"]}</span>
                                </Timeline.Title>
                                <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li>{texts["Exp_Junior_Desc1"]}</li>
                                        <li>{texts["Exp_Junior_Desc2"]}</li>
                                    </ul>
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>

                        {/* Senior Consultant - Virgin Mobile */}
                        <Timeline.Item>
                            <Timeline.Point icon={HiCheck} />
                            <Timeline.Content>
                                <Timeline.Time className='text-red-400 font-bold text-lg'>03.2019 – 08.2021</Timeline.Time>
                                <Timeline.Title className='text-white text-xl font-semibold mt-1'>
                                    {texts["Exp_SeniorConsultant_Title"]} <span className="text-gray-400 text-sm font-normal">| {texts["Exp_SeniorConsultant_Company"]}</span>
                                </Timeline.Title>
                                <Timeline.Body className="text-gray-300 mt-2 leading-relaxed">
                                    {texts["Exp_SeniorConsultant_Desc"]}
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