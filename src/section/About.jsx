/** 
 * @copyright 2026 Tanushri
 * @license Apache-2.0
*/



import React from 'react';
import "../components/About.css";
import TypewriterHeading from '../components/TypewriterHeading';

const About = () => {
  return (
    <section className="about-section">
      {/* Background video */}
      <video className="about-video" loop autoPlay muted playsInline>
        <source src="/assets/galaxy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground video */}
      <video className="foreground-video" loop autoPlay muted playsInline>
        <source src="/assets/blackhole.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="scroll-down"></div>

      <section className="info-section">
        <TypewriterHeading text="Hello There, Welcome To My Universe" className="section-title" />

        <div className="info-cards">

          {/* Card 1 */}
          <div className="card">
            <h1>👨‍💻 Hey, I'm Tanushri</h1>
            <p>Passionate Computer Science & Engineer. Building impactful projects with AI, ML, and<br/> Full-Stack Development.
Turning ideas <br/>into real-world solutions.</p>
            <img src="/assets/pic2.png" alt="card-image"/>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h1>Code is Craft</h1>
            <p>Clean code is my art.
Simple, scalable, and timeless.
Every line should solve a problem beautifully.</p>
            <img src="/assets/grid2.png" alt="card-image"/>
          </div>

          {/* Card 3 */}
          <div className="card">
            <h1>I’m available to work globally</h1>
            <p>Open to Collaborations and Projects across the World 🌍</p>
            <video autoPlay loop muted playsInline src="/assets/glob.mp4" type="video/mp4"></video>
            <button onClick={() => window.open('https://wa.me/919362118496', '_blank')}>
  {/* I've updated the icon to the WhatsApp logo for clarity */}
  <i className='bx bxl-whatsapp'></i> Contact Me
</button>
          </div>

          {/* Card 4 */}
          <div className="card">
            <h1>⚡Tech Stack</h1>
            <p> <b>I'm Proficient in:-</b><br/> <b>Languages:</b> C, C++, Python, Java<br/>

<b>Web:</b> HTML, CSS, JavaScript<br/>

<b>Tools:</b> GitHub, Figma, Streamlit, MySQL

Domains: ML, Data Science, Full-Stack<br/>etc.</p>
            <img src="/assets/grid4.png" alt="card-image"/>
          </div>

          {/* Card 5 */}
          <div className="card">
           <h1>
          Access My CV Below
          </h1>
            <p>You can grab my latest CV here and explore my detailed experience.</p>
            <button
  onClick={() => {
    console.log("Button clicked");
    window.open("/assets/resume.pdf", "_blank");
  }}
>
  Download CV
</button>
          </div>

        </div>
      </section>
    </section>
  );
};

export default About;