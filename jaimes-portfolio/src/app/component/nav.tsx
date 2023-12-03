import Link from "../../../node_modules/next/link"

import Title from "./nav-item"
import type { Navprop, Item } from '../type/typecenter'
import { useEffect, useState } from "react"


const Nav = (props:Navprop) => {

    const [navState, setNavState] = useState('show')
    useEffect(()=>{
        if (props.y > 500 && navState != 'lock'){
            setNavState('hide')
        }
        else if (navState != 'lock'){
            setNavState('show')
        }
        console.log(navState)
    },[props.y])

    return (
        <>
            <div className={`fixed w-15 h-15 bg-ci-1 bottom-14 right-28 z-50 ${navState === 'hide' ? 'rotate-0':'rotate-225'} duration-700 ease-in-out`} onClick={() => navState == 'hide' ? setNavState('lock'):setNavState('hide')}>
                <div className="p-5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.226807" y="0.226807" width="10" height="10" rx="5" fill="white" />
                        <rect x="17.0562" y="0.226807" width="10" height="10" rx="5" fill="white" />
                        <rect x="17.0562" y="17.0561" width="10" height="10" rx="5" fill="white" />
                        <rect x="0.226807" y="17.0561" width="10" height="10" rx="5" fill="white" />
                    </svg>
                </div>
            </div>
            <div className={`fixed   ${navState === 'hide' ? 'opacity-0 bottom-0 scale-0 right-0':'opacity-1 bottom-40 scale-1 right-20'} duration-500`} >
               {props.items.map((e:Item)=>{
                return <Title {...e} key={e.id}/>
               })}
            </div>
        </>
    )
}

export default Nav