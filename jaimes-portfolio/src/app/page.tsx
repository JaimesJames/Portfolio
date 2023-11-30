import Image from 'next/image'

import Cover from './component/cover'
import Profile from './component/profile'
import ProjectandActivite from './component/pjandact'

export default function Home() {
  return (
    <>
      <div className='container'>
        <Cover/>
        <Profile/>
        <ProjectandActivite/>
      </div>
    </>
  )
}
