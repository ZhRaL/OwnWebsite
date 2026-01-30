import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects/Projects';
import Technologies from './Components/Technologies/Technologies';
import Contact from './Components/Contact/Contact';
import HeaderBackground from './assets/Header_Element.png';

function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-fixed"
      id="global-bg"
    >
      <Header />
      <img
        src={HeaderBackground}
        alt=""
        className="object-contain fixed flex"
        style={{ height: '320px', opacity: 1 }}
      />
      <main
        className="w-full max-w-4xl flex flex-col items-center px-4 z-10 rounded-xl shadow-lg my-8"
        style={{ background: 'rgba(255,255,255,0.75)' }}
      >
        <Aboutme />
        <Skills />
        <div className="my-8 flex justify-center w-full">
          <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
        </div>

        <Projects />
        <div className="my-8 flex justify-center w-full">
          <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
        </div>

        <Technologies />
        <div className="my-8 flex justify-center w-full">
          <div className="w-2/3 h-0.5 bg-gray-300 rounded"></div>
        </div>

        <Contact />
        <div className="mb-12" />
      </main>
    </div>
  );
}

export default App;
