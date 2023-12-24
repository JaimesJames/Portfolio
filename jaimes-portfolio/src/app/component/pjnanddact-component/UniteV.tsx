import Image from "next/image"

import mock from '@/app/img/mock-Unite.png'

const Unite = () => {
    return (
        <>
            <div className=" p-4 md:h-500 w-full flex flex-col content-center justify-center relative z-10 md:bg-yellow-600 rounded-2xl md:text-ci-1 text-white">
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
                <div className="md:p-20 p-5 flex md:flex-row flex-col-reverse justify-between content-center text-left">

                    <div className="flex flex-col gap-10 content-center justify-center md:p-14">
                        <div>
                            <h1 className="text-4xl font-bold text-center md:text-start text-yellow-500 md:text-A7271A">Unite V - Detective City</h1>
                            <h4 className="text-2xl text-center md:text-start">Artwork</h4>
                        </div>
                        <p className="text-xl ">I’ve been Art Leader Position in Unite 5th.
                            Design Mood board, CI
                            and Another Artworks</p>
                        <div className=" w-auto h-auto flex gap-4 md:justify-end justify-center">
                            <a href="https://www.instagram.com/unitecamp_itkmitl/">
                                <div className="w-14 h-14 bg-A7271A rounded-full flex justify-center content-center p-3 hover:bg-amber-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="31" width="31" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                </div>
                            </a>
                        </div>
                        <div className="flex md:justify-end justify-center ">
                            <svg height="5" viewBox="0 0 552 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="123" height="8" fill="#A7271A" />
                                <rect x="429" width="123" height="8" fill="#FFD600" />
                                <rect x="143" width="205" height="8" fill="#574746" />
                            </svg>

                        </div>
                    </div>
                    <div>
                        <Image src={mock} width={800} height={100} alt='coral' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Unite