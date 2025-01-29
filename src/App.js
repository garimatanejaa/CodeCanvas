import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import Github from './components/Github';
import Footer from './components/Footer';
import Paper from './components/Paper';
import LeetcodeStats from'./components/LeetcodeStats';
import Skills from './components/Skills';

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 500,
    smooth: 'easeInOutQuad',
  });
};

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="paper">
        <Paper />
      </div>
      <div id="achievements">
        <Achievement />
      </div>
      <LeetcodeStats /> 
      <Github />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <button 
        onClick={scrollToTop} 
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
        Scroll to Top ↑
      </button>
    </ChakraProvider>
  );
}

export default App;