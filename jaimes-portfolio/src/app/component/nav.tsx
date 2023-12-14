import Link from "../../../node_modules/next/link"

import Title from "./nav-item"
import type { Navprop, Item, ParentProps } from '../type/typecenter'
import { useEffect, useState, useRef } from "react"


const Nav = (props: Navprop, {handleSection}:ParentProps) => {


    const [navState, setNavState] = useState('show')
    useEffect(() => {
        if (props.y > 500 && navState != 'lock') {
            setNavState('hide')
        }
        else if (navState != 'lock') {
            setNavState('show')
        }

    }, [props.y])


    return (
        <>
            <div onClick={()=>handleSection} className={`md:flex hidden fixed bottom-14 right-28 z-50 flex-col items-end gap-10 `}>
                <div className={`flex flex-col gap-5 ${navState === 'hide' ? 'opacity-0  scale-0 translate-y-36 translate-x-28' : 'opacity-1  scale-1 '} duration-500`} >
                    {props.items.map((e: Item) => {
                        
                        return <Title {...e} key={e.id} />
                    })}
                </div>
                <div className={`flex items-center justify-center w-16 h-16 bg-white  ${navState === 'hide' ? 'rotate-0' : 'rotate-225'} duration-700 ease-in-out`} onClick={() => navState == 'hide' ? setNavState('lock') : setNavState('hide')}>

                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.226807" y="0.226807" width="10" height="10" rx="5" fill="#2b2b2b" />
                        <rect x="17.0562" y="0.226807" width="10" height="10" rx="5" fill="#2b2b2b" />
                        <rect x="17.0562" y="17.0561" width="10" height="10" rx="5" fill="#2b2b2b" />
                        <rect x="0.226807" y="17.0561" width="10" height="10" rx="5" fill="#2b2b2b" />
                    </svg>

                </div>

            </div>

        </>
    )
}

export default Nav