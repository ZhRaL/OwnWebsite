import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Aboutme />

      <Contact />
    </>
  );
}

export default App;
