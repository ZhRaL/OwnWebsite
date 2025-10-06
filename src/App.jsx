import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Projects from './Components/Projects/Projects';
import Technologies from './Components/Technologies/Technologies';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-fixed"
      id="global-bg"
    >
      <Header />
      <main
        className="w-full max-w-4xl flex flex-col items-center px-4 z-10 rounded-xl shadow-lg my-8"
        style={{ background: 'rgba(255,255,255,0.75)' }}
      >
        <Aboutme />
        <form name="contactMe" method="POST" netlify>
          <input type="hidden" name="form-name" value="contactMe" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{' '}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
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
