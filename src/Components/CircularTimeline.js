import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CircularTimeline = ({ percentage, title, description }) => {
  const circleRef = useRef(null);
  const barRef = useRef(null);
  const percentageRef = useRef(null);
  const containerRef = useRef(null); // Reference to the container div
  const titleRef = useRef(null); // Reference to the title element
  const descriptionRef = useRef(null); // Reference to the description element
  const [inView, setInView] = useState(false); // State to track if the component is in view

  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

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

      // Animate the circle's strokeDashoffset to show the progress
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: offset,
          duration: 2,
          ease: "power2.out",
          
        }
      );

      // Animate the percentage number counting up
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

      // Animate the revolving yellow bar
      gsap.to(barRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });

      // Animate the title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      // Animate the description
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7,
        ease: "power2.out",
      });
    }
  }, [inView, circumference, percentage]);

  return (
    <div className="flex flex-col items-center mb-8" ref={containerRef}>
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
            stroke="#f5a623"
            fill="none"
          />
        </svg>
        <div
          className="percentage absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
          ref={percentageRef}
        ></div>
      </div>
      <h3
        className="text-white text-3xl mt-4 font-acme"
        ref={titleRef}
      >
        {title}
      </h3>
      <p
        className="text-gray-400 text-sm font-roboto "
        ref={descriptionRef}
      >
        {description}
      </p>
    </div>
  );
};

export default CircularTimeline;
