'Use client'
import React from 'react';
import Header from './component/pages/Header';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Skills from './component/pages/Skills';
import Projects from './component/pages/Projects';
import Contact from './component/pages/Contact';
import Footer from './component/pages/Footer';

export default function page() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

