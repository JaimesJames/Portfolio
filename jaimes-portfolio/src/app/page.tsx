
import Cover from './component/cover'
import Profile from './component/profile'
import ProjectandActivite from './component/pjandact'
import Nav from './component/nav'

export default function Home() {
  const item = [
    {id:1, spot:'About', y:'0'}
  ]
  return (
    
    <>
      <div className='container'>
        <Cover/>
        <Profile/>
        <ProjectandActivite items={item} />
      </div>
      <Nav/>
    </>
  )
}
