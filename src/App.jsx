import React from 'react';

import MainNavbar from './section/Navbar';
import Hero from './section/Hero';
import About from './section/About';
import Projects from './section/Projects';
import Experiences from './section/Experiences';
import Skill from './section/Skill';
import Certificates from './section/Certificates';
import Contact from './section/Contact';
import Footer from './section/Footer';

import ChatAvatar from "./components/chatbot/ChatAvatar";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">

        <MainNavbar />

        <div id="home">
          <Hero />
        </div>

        <div className="container mx-auto max-w-9xl">
          <div id="about">
            <About />
          </div>
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="work">
          <Experiences />
          <Skill />
        </div>

        <div id="certificates">
          <Certificates />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <Footer />

      </div>

      {/* Floating Chat Avatar */}
      <ChatAvatar />

    </>
  );
}

export default App;