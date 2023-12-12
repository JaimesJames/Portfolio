"use client";
import { useEffect, useState } from "react";

import Cover from './component/cover'
import About from './component/about'
import ProjectandActivite from './component/ProjectandAct'
import Nav from './component/nav'
import CoverScene from "./component/coverScene";

import type { Item, Abouts } from './type/typecenter'


export default function Home() {


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY || window.pageYOffset;
    // console.log(position);
    setScrollPosition(position);


  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const [title, setTitle] = useState('About')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry.target)
          const getTitle = entry.target.getAttribute('data-title') || '';
          setTitle(getTitle);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });
    const targets = document.querySelectorAll('.observer');
    targets.forEach((target) => {
      observer.observe(target);

    })

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      })
    }

  }, []);
  // console.log(title)
  const inititem: Item[] = [
    { id: 1, spot: 'About', fill: `${title === 'About' ? '#2b2b2b' : 'none'}` },
    { id: 2, spot: 'Projects & Activities', fill: `${title === 'Projects & Activities' ? '#2b2b2b' : 'none'}` },
    { id: 3, spot: 'Artwork', fill: `${title === 'Artwork' ? '#2b2b2b' : 'none'}` },
  ];

  const about: Abouts[] = [
    {
      title: 'Abilities',
      detail: ['Fast and easy learner', 'Creativity', 'Adaptabily', 'High Motivation', 'flexible and under pressure'],
      color: 'white'
    },
    {
      title: 'Programs',
      detail: ['Visual Studio Code','AutoDesk Maya','Unreal Engine', 'Figma', 'Adobe', 'QT', 'Blender', 'InteliJ IDEA'], 
      color: 'white'
    },
    {
      title: 'Languages & Skills',
      detail: ['Typescript', 'Javascript', 'Python', 'UI and Graphic Designing', 'Object Oriented Programming', 'SQL & NoSQL', 'JAVA', 'PyQT'], 
      color: 'white'
    },
    {
      title: 'Frameworks & Tools',
      detail: ['React.js', 'Tailwind CSS', 'Next.js', 'Three.js', 'Express.js', 'Svelte.js', 'Vue.js'], 
      color: 'white'
    }
  ]

  return (

    <><CoverScene />
      <div className='container'>
        <Cover />
        <div className="observer" data-title="About" />
        <About about={about}/>
        <div className="observer" data-title="Projects & Activities" />
        <ProjectandActivite />
      </div>
      <Nav items={inititem} y={scrollPosition} />
    </>
  )
}
