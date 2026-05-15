//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
//import Button from "./components/Button/Button";
//import Card from "./components/Card/Card";
//import albumImg from "./assets/albums-img1.png";
import Section from "./components/Section/Section";

function App() {
  

  return (
    <>
      
      <Navbar />
      <Hero />

      <div>
        <Section 
          title="Top Albums"
          apiEndpoint="https://qtify-backend.labs.crio.do/albums/top" 
        />

        <Section
          title="New Albums"
          apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
        />
      </div>

    </>
  )
}

export default App
