import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CircularTimeline = ({ percentage, title, description }) => {
  const circleRef = useRef(null);
  const barRef = useRef(null);
  const percentageRef = useRef(null);
  const containerRef = useRef(null); 
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillBoxesRef = useRef(null); // New ref for skillBoxes animation
  const [inView, setInView] = useState(false);

  const radius = 50; 
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const offset = circumference - (percentage / 100) * circumference;

      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: offset,
          duration: 2,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        percentageRef.current,
        { innerText: 0 },
        {
          innerText: percentage,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          onUpdate: function () {
            percentageRef.current.innerHTML = Math.round(percentageRef.current.innerText) + "%";
          },
        }
      );

      gsap.to(barRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7,
        ease: "power2.out",
      });
    }
  }, [inView, circumference, percentage]);

  // Scroll-triggered animation
  useEffect(() => {
    if (skillBoxesRef.current) {
      gsap.fromTo(
        skillBoxesRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillBoxesRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center mb-8 text-center" ref={containerRef}>
      <div className="relative w-32 h-32">
        <svg width="120" height="120">
          <circle className="circle-bg" cx="60" cy="60" r={radius} />
          <circle
            className="circle"
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={circumference}
            ref={circleRef}
          />
          <circle
            className="circle-bar"
            cx="60"
            cy="60"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            ref={barRef}
            strokeWidth="8"
            stroke="#f70776"
           
            fill="none"
          />
        </svg>
        <div
          className="percentage absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
          ref={percentageRef}
        ></div>
      </div>
      <h3
        className="text-white text-2xl mt-4 font-bold font-acme w-64"
        ref={titleRef}
      >
        {title}
      </h3>
      <p
        className="text-gray-400 text-sm mt-2 font-roboto max-w-xs w-64"
        ref={descriptionRef}
      >
        {description}
      </p>
      <div className="skill-boxes" ref={skillBoxesRef}>
        {/* Skill Boxes or other content */}
      </div>
    </div>
  );
};

export default CircularTimeline;
