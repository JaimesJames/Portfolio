import Image from "next/image"

import mock from '@/app/img/mock domitory.png'

const Domfinding = () => {
    return (
        <>
            <div className=" p-4 h-screen w-full flex flex-col content-center justify-center relative z-10">
                <div>
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
                <div className="p-20 flex justify-between content-center text-left">
                    <div>
                        <Image src={mock} width={1500} height={100} alt='coral' />
                    </div>
                    <div className="flex flex-col gap-10 content-center justify-center">
                        <div>
                            <h1 className="text-3xl font-bold">KMITL with dormitory finding</h1>
                            <h4 className="text-2xl ">UX & UI Design Project</h4>
                        </div>
                        <p className="text-xl ">a project from the Human Interface Design course, We were design the application to relate with actually user requirements.</p>
                        <p className="text-xl ">Our project suit to everyone who need to find dormitory.</p>
                        <p className="text-xl ">The IT with dormitory finding is base on IPhone 8 Viewport.</p>
                        <div className=" w-auto h-auto flex gap-4 ">
                           
                            <div className="w-14 h-14 bg-674188 rounded-full flex justify-center content-center p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Domfinding