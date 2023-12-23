import React from 'react';
import YouTubePlayer from '../component/YouTubePlayer';
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


            </div>
            <div className='w-full p-4 mb-20'>
                <h2 className="text-white text-3xl font-bold text-center mb-10">3D Working</h2>
                <div className='w-full flex md:p-10 xl:flex-row md:gap-0 flex-col gap-4 justify-center content-center'>
                    <YouTubePlayer videoId="lbDm7tlKMAg" />
                    <YouTubePlayer videoId="md8lLVtfsL4" />

                </div>
            </div>
            
            <div className="w-full">
                <h2 className="text-white text-3xl font-bold text-center mb-10">Digital Art</h2>
            

                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 aspect-square">
                    <div className='flex flex-col gap-4'>
                        <Image src='/artwork/1.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG1" />
                        <Image src='/artwork/2.png' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG2" />

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Image src='/artwork/4.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG4" />
                        <Image src='/artwork/5.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG5" />

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Image src='/artwork/7.png' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG7" />
                        <Image src='/artwork/8.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG7" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Image src='/artwork/3.jpg' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG3" />
                        <Image src='/artwork/6.png' width="0" height="0" sizes="100vw" className="w-auto h-auto" alt="IG6" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artwork