import Image from "next/image"

import mock from '@/app/img/ranger.png'

const TheRangerNext = () => {
    return (
        <>
            <div className=" p-4 lg:h-500 w-full flex flex-col content-center justify-center relative z-10 md:bg-ranger rounded-2xl">
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
                <div className="md:p-20 p-5 flex lg:flex-row flex-col justify-between content-center text-left gap-10">
                    <div>
                        <Image src={mock} width={0} height={0} alt='coral' />
                    </div>
                    <div className="flex flex-col gap-10 content-center justify-center text-white p-2">
                        <div>
                            <h1 className="text-4xl font-bold text-center lg:text-start text-FFE55B">IT Ladkrabang Open house 2023 -The Ranger Next</h1>
                            <h4 className="text-2xl text-center lg:text-start">Key Conceptual Design</h4>
                        </div>
                        <p className="text-md ">I’ve participated in IT-KMITL’s Art and PR Team.
                            The Rangers represent every one who have passion
                            if it’s you? fighter!</p>
                        <div className=" w-auto h-auto flex gap-4 lg:justify-start justify-center">
                            <a href="https://openhouse.it.kmitl.ac.th">
                                <div className="w-14 h-14 bg-B0D242 rounded-full flex justify-center content-center p-3 hover:bg-amber-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/ITLadkrabangOpenhouse">
                                <div className="w-14 h-14 bg-FF4161 rounded-full flex justify-center content-center p-3 hover:bg-amber-600">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 512 512"><path fill='#ffffff' d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                                </div>
                            </a>
                        </div>
                        <div className="flex lg:justify-start justify-center">

                            <svg height="5" width='400' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="224" height="8" fill="#B0D242" />
                                <rect x="237" width="88" height="8" fill="#FFE55B" />
                                <rect x="250" width="88" height="8" fill="#FF4161" />
                            </svg>

                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default TheRangerNext