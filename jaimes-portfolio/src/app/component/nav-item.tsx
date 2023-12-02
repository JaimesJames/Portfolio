import type { Item, Navprop } from "../type/typecenter"

const Title = (props:Item) => {
    return (
        
        <>
            <div className=" p-5 flex h-auto w-auto content-center justify-end gap-5 " data-title={props.spot}>
                <h2>{props.spot}</h2>
                <div className="p-1">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
                        <rect x="10.3389" y="0.707107" width="13.6213" height="13.6213" transform="rotate(45 10.3389 0.707107)" stroke="#2B2B2B" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Title