import Image from "next/image"

import mock from '@/app/img/mock domitory.png'

const Domfinding = () => {
    return (
        <>
            <div className=" p-4 md:h-500 w-full flex flex-col content-center justify-center relative z-10 md:bg-white rounded-2xl md:text-ci-1 text-white">
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
                <div className="md:p-20 p-5  md:flex-row flex flex-col justify-between content-center text-left">
                    <div>
                        <Image src={mock} width={800} height={100} alt='coral' />
                    </div>
                    <div className="flex flex-col gap-5 content-center justify-center md:p-14">
                        <div>
                            <h1 className="text-4xl font-bold text-center md:text-start text-purple-500">KMITL with dormitory finding</h1>
                            <h4 className="text-2xl text-center md:text-start">UX & UI Design Project</h4>
                        </div>
                        <p className="text-lg ">a project from the Human Interface Design course, We were design the application to relate with actually user requirements.</p>
                        <p className="text-lg ">Our project suit to everyone who need to find dormitory.</p>
                        <p className="text-lg ">The IT with dormitory finding is base on IPhone 15 plus Viewport.</p>
                        <div className=" w-auto h-auto flex gap-4 md:justify-start justify-center">
                            <a href="https://www.figma.com/proto/qMjznwrof3DLhXQ7LKEXJH/HID-Remake?page-id=0%3A1&type=design&node-id=2-1425&viewport=611%2C432%2C0.56&t=J7iN47yXrorkDpBQ-1&scaling=scale-down&starting-point-node-id=2%3A1425&mode=design">
                                <div className="w-14 h-14 bg-purple-500 rounded-full flex justify-center content-center p-3 hover:bg-amber-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Domfinding