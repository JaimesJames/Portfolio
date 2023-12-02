import { deflate } from "zlib"

const ProjectandActivite = () => {
    return (
        <>
            <div className="w-full text-center observer" data-title="Projects & Activities">
                <div className=" p-4 h-screen w-full flex flex-col content-center justify-center relative z-10 ">
                    <div>
                        <h1 className="text-5xl">Projects & Activities </h1>
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
                <div className=" p-4 h-screen w-full flex flex-col content-center justify-center relative z-10">
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ProjectandActivite