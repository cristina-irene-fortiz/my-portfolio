import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';


/**
 * Root application component
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Resume />
        <Products />
        <Contact />
      </main>
    </>
  );
}
