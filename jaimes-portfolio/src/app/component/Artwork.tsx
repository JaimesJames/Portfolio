import React from 'react';
// import YouTubePlayer from '../component/YouTubePlayer';
import Models from './Models';

import Image from "next/image"
const Artwork = () => {

    return (
        <>
            <div className=" p-4 h-screen w-full flex flex-col content-center justify-center relative z-10 observer" data-title="Artwork">
                <div>
                    <h1 className="text-5xl text-center text-white">Artwork</h1>
                </div>
                <div>
                    <svg className="absolute left-sqr-1 top-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#ff8c17" />
                    </svg>
                    <svg className="absolute left-sqr-1 bottom-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#ff8c17" />
                    </svg>
                    <svg className="absolute right-sqr-1 top-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#ff8c17" />
                    </svg>
                    <svg className="absolute right-sqr-1 bottom-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="#ff8c17" />
                    </svg>
                </div>


            </div>
            <div className="h-full w-full bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg shadow-stone-800">
            <div className='w-full p-4'>
                {/* <h2 className="text-white text-3xl font-bold text-center mb-10">3D Working</h2> */}
                <div className='w-full flex md:p-10 xl:flex-row md:gap-10 flex-col gap-4 justify-center content-center m-auto flex-wrap'>
                    {/* <YouTubePlayer videoId="lbDm7tlKMAg" />
                    <YouTubePlayer videoId="md8lLVtfsL4" /> */}
                    <iframe className='rounded-lg shadow-lg shadow-stone-800 xl:w-2/5 w-full md:h-96'  src="https://www.youtube.com/embed/lbDm7tlKMAg?si=iVSAeQpgXWYbuLwm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <iframe className='rounded-lg shadow-lg shadow-stone-800 xl:w-2/5 w-full md:h-96'  src="https://www.youtube.com/embed/md8lLVtfsL4?si=PraiF3FfBngkqJUj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <iframe className='rounded-lg shadow-lg shadow-stone-800 xl:w-2/5 w-full md:h-96'  src="https://www.youtube.com/embed/PR19Yqi_ezc?si=zXeIrehgaHxMHYmd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>

            <div className="w-full">
                {/* <h2 className="text-white text-3xl font-bold text-center mb-10">Digital Art</h2> */}
            

                <div className="grid md:grid-cols-4 grid-cols-2 gap-10 aspect-square md:p-20 p-10">
                    <div className='flex flex-col gap-10'>
                        <Image src='/artwork/1.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG1" />
                        <Image src='/artwork/2.png' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG2" />

                    </div>
                    <div className='flex flex-col gap-10'>
                        <Image src='/artwork/4.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG4" />
                        <Image src='/artwork/5.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG5" />

                    </div>
                    <div className='flex flex-col gap-10'>
                        <Image src='/artwork/7.png' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG7" />
                        <Image src='/artwork/8.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG7" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <Image src='/artwork/3.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG3" />
                        <Image src='/artwork/6.png' width="0" height="0" sizes="100vw" className="w-auto h-auto rounded-lg shadow-lg shadow-stone-800" alt="IG6" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Artwork