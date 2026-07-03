"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TypewriterHeading from "./TypewriterHeading";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="c-space section-spacing mx-auto max-w-6xl"
      ref={containerRef}
    >
      <TypewriterHeading
        text="My Work Experience & Achievements"
        className="text-heading"
      />

      <div ref={ref} className="relative pb-13">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-24"
          >
            {/* Left column */}
            <div className="sticky top-40 flex flex-col z-40 items-start md:items-end md:w-2/5 md:pr-12 px-4">
              
              {/* DOT */}
              <div className="h-10 absolute -left-[15px] md:left-auto md:right-0 md:translate-x-1/2 w-10 rounded-full bg-midnight flex items-center justify-center">
                
                {/* premium glow dot */}
                <div className="h-4 w-4 rounded-full bg-neutral-900 border border-purple-400 shadow-[0_0_20px_4px_rgba(168,85,247,0.6)]" />

              </div>

              {/* LEFT TEXT */}
              <div className="flex flex-col gap-2 md:text-center font-[EB_Garamond]">

                {/* date */}
                <h3 className="text-sm tracking-widest text-neutral-400 uppercase">
                  {item.date}
                </h3>

                {/* title */}
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,180,0,0.35)]">                  {item.title}
                </h3>

                {/* job */}
                <h3 className="text-lg text-neutral-400 font-medium tracking-wide">
                  {item.job}
                </h3>

              </div>
            </div>

            {/* Right column */}
            <div className="relative pl-0 md:pl-12 pr-4 md:pr-0 w-full md:w-3/5">

              {/* Desktop */}
              <div className="hidden md:block text-neutral-300 text-base leading-relaxed tracking-wide">

                {item.contents.map((content, idx) => {
                  const isBullet = content.trim().startsWith("•");

                  const text = isBullet
                    ? content.trim().substring(1).trim()
                    : content;

                  return (
                    <p
                      className="mb-3 font-normal flex items-center"
                      key={`content-${index}-${idx}`}
                    >
                      {isBullet && (
                        <span className="inline-block mr-3 text-purple-400 text-lg font-bold shadow-[0_0_12px_2px_rgba(168,85,247,0.7)]">
                          •
                        </span>
                      )}

                      <span>{text}</span>
                    </p>
                  );
                })}

              </div>

              {/* Mobile */}
              <div className="block mt-4 text-2xl font-bold text-left text-neutral-300 md:hidden">

                <h3>{item.date}</h3>
                <h3>{item.job}</h3>

                {item.contents.map((content, index) => (
                  <p
                    className="mb-3 font-normal text-neutral-400"
                    key={index}
                  >
                    {content}
                  </p>
                ))}

              </div>
            </div>
          </div>
        ))}

        {/* LINE */}
        <div
          style={{
            height: height- 50 + "px",
          }}
          className="absolute left-1 md:left-2/5 md:-translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};