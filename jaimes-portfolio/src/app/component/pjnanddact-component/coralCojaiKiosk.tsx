import Image from "next/image"

import mock from '@/app/img/coral.png'

const Coral = () => {
    return (
        <>
            <div className=" p-4 w-full lg:h-500 flex flex-col content-center justify-center relative z-10 md:bg-white text-white md:text-ci-1 rounded-2xl">
                <div className="md:block hidden">
                    <svg className="absolute left-sqr-1 top-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#2B2B2B" />
                    </svg>
                    <svg className="absolute left-sqr-1 bottom-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#2B2B2B" />
                    </svg>
                    <svg className="absolute right-sqr-1 top-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#2B2B2B" />
                    </svg>
                    <svg className="absolute right-sqr-1 bottom-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#2B2B2B" />
                    </svg>
                </div>
                <div className="md:p-20 p-5 flex lg:flex-row flex-col-reverse justify-between content-center text-left">
                    <div className="flex flex-col gap-5 content-center justify-center xl:p-14 xl:w-full w-11/12">
                        <div>
                            <h1 className="text-4xl font-bold text-center lg:text-start text-68B8B9">Coral Corjai Kiosk</h1>
                            <h4 className="text-2xl text-center lg:text-start">Co-Architecture Project</h4>
                        </div>
                        <p className="text-md">Coral Corjai is a project from the Multimedia Programming course, where we collaborated with the School of Architecture, Art, and Design. They were responsible for web design, and then the IT team brought the website to life</p>
                        <p className="text-md">Our project addresses the care of Thailand's seas, using a kiosk format for museum displays. This design ensures the website is best viewed on iPads.</p>
                        <div className="h-auto flex gap-4 lg:justify-start justify-center">
                            <a href="https://github.com/professorkong/SDG">
                                <div className="w-14 h-14 bg-D8DDB6 rounded-full flex justify-center content-center p-2 hover:bg-amber-600">

                                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="24" viewBox="0 0 640 512"><path fill="#2b2b2b" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                                </div>
                            </a>
                            <a href="https://coralcorjai.netlify.app/landingsimilan/main/">
                                <div className="w-14 h-14 bg-68B8B9 rounded-full flex justify-center content-center p-3 hover:bg-amber-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                </div>
                            </a>
                            <a href="https://coralcorjai.netlify.app/landingkrabi/main/">
                                <div className="w-14 h-14 bg-68B8B9 rounded-full flex justify-center content-center p-3 hover:bg-amber-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div>
                        <Image src={mock} width={0} height={0} alt='coral' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coral