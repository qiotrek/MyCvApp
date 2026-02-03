import React, { useState } from 'react';

interface ContactProps {
    texts: Record<string, string>; // Usunięto '?', bo komponent potrzebuje tych tekstów do poprawnego działania
}

const Contact: React.FC<ContactProps> = ({ texts }) => {
    const [isPhoneHovered, setPhoneHovered] = useState(false);
    const [isEmailHovered, setEmailHovered] = useState(false);
    const [isLinkedinHovered, setLinkedinHovered] = useState(false);
    
    return (
        <div id='contactCard' className="flex relative z-5 max-h-[90%] min-h-[60%] flex-row my-96 mt-30 bg-[#213b9be1] shadow-[0px_0px_50px_#f8c78f] border-8 border-solid border-black border-opacity-5 gap-10 justify-center items-center max-md:flex-col">
            <div className={`flex flex-col gap-3 bg-[#111d42] m-8 p-5 w-full max-w-5xl min-h-[350px] shadow-2xl border-solid rounded-2xl mx-4`}> 
                <h1 className="dictionaryText size-auto font-bold text-center text-zinc-500 text-xl">
                    {texts["Contact"]}
                </h1>
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
                                {!isLinkedinHovered 
                                    ? texts["ContactLinkedIn"] 
                                    : <a href='https://www.linkedin.com/in/piotr-płaziński-2178a917b/' target='_blank' rel="noopener noreferrer" className="underline decoration-dotted">
                                        {texts["ContactGoToProfile"]}
                                      </a>
                                }
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
                                {!isEmailHovered ? texts["ContactEmail"] : "piotrplazinski@gmail.com"}
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
                                {!isPhoneHovered ? texts["ContactPhone"] : "667 897 546"}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;