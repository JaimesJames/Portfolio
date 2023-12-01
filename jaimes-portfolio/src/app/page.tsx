
import Cover from './component/cover'
import Profile from './component/profile'
import ProjectandActivite from './component/pjandact'
import Nav from './component/nav'

import type { Navprop,Item } from './type/typecenter'


export default function Home() {
  const inititem:Item[] = [
    {id:1, spot:'About', y:0},
    {id:2, spot:'Projects & Activities', y:0},
    {id:3, spot:'Artwork', y:0},
  ] ;
  console.log(inititem)
  return (
    
    <>
      <div className='container'>
        <Cover/>
        <Profile/>
        <ProjectandActivite/>
      </div>
      <Nav items={inititem}/>
    </>
  )
}
