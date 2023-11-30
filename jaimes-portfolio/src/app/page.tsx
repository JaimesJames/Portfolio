import Image from 'next/image'

import Cover from './component/cover'
import Profile from './component/profile'

export default function Home() {
  return (
    <>
      <div className='container'>
        <Cover/>
        <Profile/>
      </div>
    </>
  )
}
