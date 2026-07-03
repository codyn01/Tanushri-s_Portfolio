/** 
 * @copyright 2025 Looknath
 * @license Apache-2.0
*/

import React, { useState } from "react";
import "../components/Skill.css";
import TypewriterHeading from '../components/TypewriterHeading';

const Skill = () => {
    const skillsData = [
        {name:"C", icon:"/assets/icons/c.png", level:70, category:"Programming"},
        {name:"C++", icon:"/assets/icons/cpp.png", level:75, category:"Programming"},
        {name:"Java", icon:"/assets/icons/java.png", level:85, category:"Programming"},
        {name:"Python", icon:"/assets/icons/python.png", level:80, category:"Programming"},

        {name:"HTML", icon:"/assets/icons/html.png", level:90, category:"Frontend"},
        {name:"CSS", icon:"/assets/icons/css.png", level:85, category:"Frontend"},
        {name:"JavaScript", icon:"/assets/icons/js.png", level:90, category:"Frontend"},
        {name:"React", icon:"/assets/icons/react.png", level:88, category:"Frontend"},

        {name:"Node", icon:"/assets/icons/node.png", level:82, category:"Backend"},

        {name:"MySQL", icon:"/assets/icons/mysql.png", level:80, category:"Databases"},
        {name:"MongoDB", icon:"/assets/icons/mongo.png", level:78, category:"Databases"},

        {name:"Git", icon:"/assets/icons/git.png", level:85, category:"Tools"}
    ];

    const [filter, setFilter] = useState("All");

    const filteredSkills = filter === "All" ? skillsData : skillsData.filter(s => s.category === filter);
    return (
        <section className="skills-section">
            <TypewriterHeading text="My Skills 💪" className="section-title" />

                        <div className="skills-ui">

                            <div className="skill-filters">
                                <button onClick={() => setFilter("All")} className={filter === "All" ? 'active' : ''}>All Skills</button>
                                <button onClick={() => setFilter("Programming")} className={filter === "Programming" ? 'active' : ''}>Programming</button>
                                <button onClick={() => setFilter("Frontend")} className={filter === "Frontend" ? 'active' : ''}>Frontend</button>
                                <button onClick={() => setFilter("Backend")} className={filter === "Backend" ? 'active' : ''}>Backend</button>
                                <button onClick={() => setFilter("Databases")} className={filter === "Databases" ? 'active' : ''}>Databases</button>
                                <button onClick={() => setFilter("Tools")} className={filter === "Tools" ? 'active' : ''}>Tools</button>
                            </div>

                            <div className="skill-grid">

                                {filteredSkills.map((s, i) => (
                                <div className="skill-card" key={i}>

                            <div className="skill-row">
        <img src={s.icon} alt={s.name} />
        <span className="skill-name">{s.name}</span>
        <span className="skill-percent">{s.level}%</span>
    </div>

    <div className="bar">
    <div
        style={{ "--level": s.level + "%" }}
    ></div>
</div>

</div>
                                ))}

                            </div>

                        </div>

            <div className="slider">
                <div className="list">
                    {/* Original set of items */}
                    <div className="item"><img src="/assets/1.png" alt="JavaScript logo" /></div>
                    <div className="item"><img src="/assets/2.png" alt="Tailwind CSS logo" /></div>
                    <div className="item"><img src="/assets/3.png" alt="Figma logo" /></div>
                    <div className="item"><img src="/assets/4.png" alt="Adobe XD logo" /></div>
                    <div className="item"><img src="/assets/5.png" alt="CSS3 logo" /></div>
                    <div className="item"><img src="/assets/6.png" alt="GitHub logo" /></div>
                    <div className="item"><img src="/assets/7.png" alt="Next.js logo" /></div>
                    <div className="item"><img src="/assets/8.png" alt="React logo" /></div>
                    <div className="item"><img src="/assets/9.png" alt="Node.js logo" /></div>

                    {/* Duplicated set of items for seamless loop */}
                    <div className="item"><img src="/assets/1.png" alt="JavaScript logo" /></div>
                    <div className="item"><img src="/assets/2.png" alt="Tailwind CSS logo" /></div>
                    <div className="item"><img src="/assets/3.png" alt="Figma logo" /></div>
                    <div className="item"><img src="/assets/4.png" alt="Adobe XD logo" /></div>
                    <div className="item"><img src="/assets/5.png" alt="CSS3 logo" /></div>
                    <div className="item"><img src="/assets/6.png" alt="GitHub logo" /></div>
                    <div className="item"><img src="/assets/7.png" alt="Next.js logo" /></div>
                    <div className="item"><img src="/assets/8.png" alt="React logo" /></div>
                    <div className="item"><img src="/assets/9.png" alt="Node.js logo" /></div>
                </div>
            </div>
        </section>
    );
};

export default Skill;