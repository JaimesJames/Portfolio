import Link from "../../../node_modules/next/link"

import Item from "./nav-item"


const Nav = () => {

    return (
        <>
            <div className="fixed w-15 h-15 bg-ci-1 bottom-14 right-40 z-50">
                <div className="p-5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.226807" y="0.226807" width="10" height="10" rx="5" fill="white" />
                        <rect x="17.0562" y="0.226807" width="10" height="10" rx="5" fill="white" />
                        <rect x="17.0562" y="17.0561" width="10" height="10" rx="5" fill="white" />
                        <rect x="0.226807" y="17.0561" width="10" height="10" rx="5" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="fixed right-32 bottom-40">
               <Item/>
               <Item/>
               <Item/>
            </div>
        </>
    )
}

export default Nav