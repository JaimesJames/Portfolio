import type { Item, Navprop } from "../type/typecenter"

const Title = (props:Item) => {
    return (
        
        <><a href={`#${props.spot}`} className="relative">
            <div className="mr-4 flex h-auto w-auto content-center justify-end gap-5 text-white" data-title={props.spot}>
                <h2 className="drop-shadow ">{props.spot}</h2>
                <div className="p-1 ">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
                        <rect x="10.3389" y="0.707107" width="13.6213" height="13.6213" transform="rotate(45 10.3389 0.707107)" stroke="white" />
                    </svg>
                </div>
               
            </div> 
            </a>
        </>
    )
}

export default Title