"use client";
import { useEffect, useRef, useState } from "react";

import Cover from './component/cover'
import About from './component/about'
import ProjectandActivite from './component/ProjectandAct'
import Nav from './component/nav'
import CoverScene from "./component/coverScene";
import Artwork from "./component/Artwork";
import Footer from "./component/footer";

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
  
  const sectionRefs = {
    sectionAbout: useRef(null),
    sectionPJnAV: useRef(null),
    sectionArtwk: useRef(null)
  }

  // const handleSection =(ref)=>{
  //   ref.current?.scrollIntoView({behavior: 'smooth'})
  // }

  
  const inititem: Item[] = [
    { id: 1, spot: 'About Me', fill: `${title === 'About' ? 'white' : 'none'}` },
    { id: 2, spot: 'Projects & Activities', fill: `${title === 'Projects & Activities' ? 'white' : 'none'}` },
    { id: 3, spot: 'Artwork', fill: `${title === 'Artwork' ? 'white' : 'none'}` },
  ];

  const about: Abouts[] = [
    { id:1,
      title: 'Abilities',
      detail: [
        {id:1, list:'Fast and easy learner'}, 
        {id:2, list:'Creativity'}, 
        {id:3, list:'Adaptabily'}, 
        {id:4, list:'High Motivation'}, 
        {id:5, list:'flexible and under pressure'}
      ],
      color: 'white'
    },
    { id:2,
      title: 'Programs',
      detail: [
        {id:1, list:'Visual Studio Code'},
        {id:2, list:'AutoDesk Maya'},
        {id:3, list:'Unreal Engine'}, 
        {id:4, list:'Figma'}, 
        {id:5, list:'Adobe'}, 
        {id:6, list:'QT'}, 
        {id:7, list:'Blender'}, 
        {id:8, list:'InteliJ IDEA'}
      ], 
      color: 'white'
    },
    { id:3,
      title: 'Languages & Skills',
      detail: [
        {id:1, list:'Typescript'}, 
        {id:2, list:'Javascript'}, 
        {id:3, list:'Python'}, 
        {id:4, list:'UI and Graphic Designing'}, 
        {id:5, list: 'Object Oriented Programming'}, 
        {id:6, list:'SQL & NoSQL'}, 
        {id:7, list: 'JAVA'}, 
        {id:8, list: 'PyQT'}
      ], 
      color: 'white'
    },
    { id:4,
      title: 'Frameworks & Tools',
      detail: [
        {id:1, list:'React.js'}, 
        {id:2, list:'Tailwind CSS'}, 
        {id:3, list:'Next.js'}, 
        {id:4, list:'Three.js'}, 
        {id:5, list:'Express.js'}, 
        {id:6, list:'Svelte.js'}, 
        {id:7, list:'Vue.js'},
        {id:8, list:'Gsap'}
      ], 
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
        <div className="observer" data-title="Projects & Activities" />
        <div className="observer" data-title="Artwork" />
        <Artwork/>
      </div>
      <Footer/>
      <Nav items={inititem} y={scrollPosition} />
    </>
  )
}
