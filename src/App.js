import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Layouts/Navbar';
import Crypto from './pages/Crypto';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const { body } = document;
    body.setAttribute('data-theme', darkMode);
  }, [darkMode]);

  return (
    <div
      className={`w-full md:w-6/12 mx-auto ${darkMode ? 'dark bg-newLightRed' : 'bg-brightBlue'}`}
    >
      <Navbar dark={handleDarkMode} />
      <main className="top-20 relative text-white bg-brightBlue dark:bg-newLightRed">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:uuid" element={<Crypto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
