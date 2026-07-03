import React from 'react'
import TypewriterHeading from '../components/TypewriterHeading.jsx'

const certificates = [
  {
    image: '/assets/certificates/c2.jpg',
    title: 'Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Sep 2025',
    desc: 'Certified in Generative AI, LLM, and prompt engineering.',
    skills: ['GenAI', 'LLM', 'AI'],
    link: 'https://drive.google.com/file/d/1VXkvWuezv4XSfyzncQGZLRR4JOjZ3F-w/view?usp=sharing'
  },

  // {
  //   image: '/assets/certificates/c4.png',
  //   title: 'Cloud Computing',
  //   issuer: 'NPTEL',
  //   date: 'Oct 2025',
  //   desc: 'Completed NPTEL certification in cloud architecture and virtualization.',
  //   skills:  ['Cloud', 'AWS', 'Virtualization'],
  //   link: 'https://drive.google.com/file/d/1_JHG245jF-cHdXy-j650Bihu1MW3rMAc/view?usp=sharing'
  // },

  // {
  //   image: '/assets/certificates/c3.png',
  //   title: 'Data Science Professional',
  //   issuer: 'Oracle University',
  //   date: 'Oct 2025',
  //   desc: 'Certified in Data Science, ML, and Oracle Cloud AI services.',
  //   skills: ['Machine Learning', 'Python', 'Data Science'],
  //   link: 'https://drive.google.com/file/d/1A_AkjBi-PjJSAi6G8krE7M61bwRB3GTt/view?usp=sharing'
  // },

  {
    image: '/assets/certificates/c1.png',
    title: 'Oracle DevOps Professional',
    issuer: 'Oracle University',
    date: 'Oct 2025',
    desc: 'Certified in Oracle Cloud DevOps tools and automation.',
    skills: ['OCI', 'DevOps', 'Cloud', 'Automation'],
    link: 'https://drive.google.com/file/d/1HjuyMWUngLwMN93PmLXkMLDieJ-ARmiI/view?usp=sharing'
  },

  // {
  //   image: '/assets/certificates/c5.png',
  //   title: 'Research Paper Presentation',
  //   issuer: 'ICETM Conference',
  //   date: 'May 2025',
  //   desc: 'Presented research on AI Smart Bandage at ICETM conference.',
  //   skills: ['Research', 'AI', 'Conference'],
  //   link: 'https://drive.google.com/file/d/1mcvHPs86y-CBBTaNIrsO5_Dtstj3JlhS/view?usp=sharing'
  // },

  // {
  //  image: '/assets/certificates/c6.png',
  //  title: 'German Language A1+',
  //   issuer: 'Udemy',
  //   date: 'Oct 2023',
  //   desc: 'Completed beginner level German language certification.',
  //   skills: ['German', 'Language'],
  //   link: 'https://drive.google.com/file/d/15OBEfwP-0Ql4LmLhV5_zU3Rk3r9qWHFr/view?usp=sharing'
  // }
]

export default function Certificates() {
  return (
    <section id="certificates" className="section-spacing">

      <div className="mx-auto max-w-6xl px-8">

        <TypewriterHeading
          text="Certificates"
          className="section-title text-5xl"
        />

        <p className="mt-6 text-lg text-zinc-400 max-w-2xl"> Professional credentials that validate my technical expertise. </p>

        {/* GRID */}
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {certificates.map((c, idx) => (

            <div key={idx} className="flip-card">

              <div className="flip-inner">

                {/* FRONT */}
                <div className="flip-front cert-front">

                  <img
                    src={c.image}
                    className="cert-img"
                  />

                  <div className="cert-front-overlay">

                    <h3 className="cert-front-title">
                      {c.title}
                    </h3>

                    <p className="cert-front-desc">
  {c.desc}
</p>

                    <div className="cert-front-footer">

                      <span>{c.issuer}</span>

                      <span>{c.date}</span>

                    </div>

                  </div>

                </div>


                {/* BACK */}
                <div className="flip-back cert-back">

                  <h3 className="cert-title">
                    {c.title}
                  </h3>

                  <div className="cert-row">
                    <span className="cert-label">Issued by:</span>
                    <span className="cert-value">{c.issuer}</span>
                  </div>

                  <div className="cert-row">
                    <span className="cert-label">Date:</span>
                    <span className="cert-value">{c.date}</span>
                  </div>

                  <div className="cert-row">
                    <span className="cert-label">Skills:</span>

                    <div className="cert-skills">
                      {c.skills.map((s, i) => (
                        <span key={i} className="skill-pill">
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>

                  <a
                    href={c.link}
                    className="cert-btn"
                  >
                    View Certificate
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      <style>{`

        .flip-card{
          perspective:1000px;
          height:320px;
        }

        .flip-inner{
          position:relative;
          width:100%;
          height:100%;
          transform-style:preserve-3d;
          transition:0.7s;
        }

        .flip-card:hover .flip-inner{
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back{
          position:absolute;
          inset:0;
          backface-visibility:hidden;
          border-radius:18px;
          padding:16px;
          display:flex;
          flex-direction:column;
        }

        .flip-back{
          transform: rotateY(180deg);
          justify-content:space-between;
        }

        .cert-back{
          background: linear-gradient(
            180deg,
            rgba(40,40,90,0.9),
            rgba(10,10,40,0.9)
          );
          backdrop-filter: blur(12px);
          border: 1px solid rgba(120,120,255,0.4);
          border-radius: 18px;
          padding: 18px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          color:white;
        }

        .cert-title{
          font-size:22px;
          font-weight:600;
          margin-bottom:10px;
        }

        .cert-row{
          margin-top:8px;
        }

        .cert-label{
          font-size:14px;
          color:#aab;
          display:block;
        }

        .cert-value{
          font-size:16px;
          font-weight:600;
        }

        .cert-skills{
          display:flex;
          flex-wrap:wrap;
          gap:6px;
          margin-top:6px;
        }

        .skill-pill{
          font-size:12px;
          padding:4px 8px;
          border-radius:8px;
          background:rgba(80,80,255,0.3);
          border:1px solid rgba(150,150,255,0.4);
        }

        .cert-btn{
          margin-top:12px;
          text-align:center;
          padding:10px;
          border-radius:10px;
          background:#e5e7eb;
          color:#222;
          font-weight:600;
          transition:0.2s;
        }

        .cert-btn:hover{
          background:white;
        }

        .cert-front{
          overflow:hidden;
          border-radius:18px;
          background:rgba(10,10,40,0.8);
          border:1px solid rgba(120,120,255,0.4);
          display:flex;
          flex-direction:column;
          padding:0;
        }

        .cert-img{
          width:100%;
          height:55%;
          object-fit:cover;
          border-top-left-radius:18px;
          border-top-right-radius:18px;
        }

        .cert-front-overlay{
          flex:1;
          padding:16px;
          background:linear-gradient(
            180deg,
            rgba(20,20,60,0.9),
            rgba(5,5,30,0.95)
          );
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .cert-front-title{
          font-size:20px;
          font-weight:600;
          color:#60a5fa;
        }

        .cert-front-desc{
          font-size:14px;
          color:#cbd5e1;
          margin-top:6px;
        }

        .cert-front-footer{
          display:flex;
          justify-content:space-between;
          margin-top:10px;
          color:#9ca3af;
          font-size:14px;
        }

        .flip-card:hover .cert-front{
          box-shadow:
            0 0 15px #00ffff,
            0 0 30px #6366f1,
            0 0 50px rgba(0,255,255,0.4);
        }

      `}</style>

    </section>
  )
}