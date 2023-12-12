import { Abouts } from "../type/typecenter"

const AboutDeteil =(props:Abouts)=>{
    let count = 0
    return(
        <>
        <div className="flex flex-wrap gap-2">
              {props.detail.map(e=>{
            return <div className="whitespace-nowrap px-5 py-1 border rounded-full border-white text-center">{e}</div>
        })}
        </div>
      
            
        </>
    )

}
export default AboutDeteil