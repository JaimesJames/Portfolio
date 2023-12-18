// import CoverScene from "./coverScene"

import { useEffect,useState } from "react";

const Cover = () => {
    const letters = "!@#$%^&*()_+{}|:<>?~`1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    let interval: any = null;
    const [showTitle, setShowTitle] = useState("ERROR♥♦");
    const title = "JaimesJames";

    useEffect(() => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            const text = title.split("").map((_, index) => {
                if (index < iteration) {
                    return title[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            });

            setShowTitle(text.join(""));

            if (iteration >= title.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 50);
    }, []);


    return (

        <div className=" p-4 h-screen w-full flex flex-col content-center justify-center relative z-50 ">
            <div className=" z-20 flex flex-col justify-between gap-y-9 drop-shadow">
                <h3 className="text-center text-3xl text-white font-thab">Hi, This is</h3>
                <h1 className="text-center md:text-8xl text-4xl font-thab text-white"><span className="font-mono text-amber-500">{showTitle}</span>'s</h1>
                <h3 className="text-center text-3xl text-white font-thab">Portfolio</h3>
            </div>

            <div>

                <div className="md:block hidden absolute bottom-sqr-1 left-20 text-white">
                    <h4 className="tracking-widest">21 12 12 2002</h4>
                    <h1 className="text-7xl font-bq">Jaimes</h1>
                </div>

                <div className="absolute right-40 top-14">
                    <h1 className="font-lf text-amber-700 font-thin text-5xl">myName'sSupanatKaewkulsriNice tomeet you</h1>
                </div>

                <svg className="absolute z-100 left-sqr-1 top-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="25" fill="#fff" />
                </svg>
                <svg className="absolute left-sqr-1 bottom-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="25" fill="#ff8c17" />
                </svg>
                <svg className="absolute right-sqr-1 top-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="25" fill="#fff" />
                </svg>
                <svg className="absolute right-sqr-1 bottom-sqr-1" width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25" height="25" fill="#ff8c17" />
                </svg>
                <svg className="md:block hidden absolute left-sqr-1 top-sqr-2 " width="9" height="151" viewBox="0 0 9 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="151" fill="white"/>
                </svg>

            </div>
        </div>

    )
}
export default Cover