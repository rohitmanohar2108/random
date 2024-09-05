import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HorizontalTechStack = ({
  percentage = 50,
  title = "Tech Stack",
  description = "",
  barColor = "bg-amber-400",
  iconClass = "", // Optional icon class
}) => {
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const percentageRef = useRef(null); // Reference for percentage text
  const [inView, setInView] = useState(false);

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
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${percentage}%`,
          duration: 2,
          ease: "power2.out",
        }
      );

      gsap.from(titleRef.current, {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(descriptionRef.current, {
        opacity: 0,
        x: 20,
        duration: 1,
        delay: 0.7,
        ease: "power2.out",
      });

      // Animate percentage text with GSAP and a custom function
      gsap.fromTo(
        percentageRef.current,
        { innerText: 0 },
        {
          innerText: percentage,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            this.targets()[0].innerText = `${Math.floor(this.targets()[0].innerText)}%`;
          },
        }
      );
    }
  }, [inView, percentage]);

  return (
    <div className="mb-3 bg-black/30 p-4 rounded-lg shadow-md" ref={containerRef}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {iconClass && (
            <i className={`devicon ${iconClass} text-4xl mr-4 ml-10`}></i> // Assuming you're using Devicon for icons
          )}
          <h3 className="text-white text-3xl font-acme" ref={titleRef}>
            {title}
          </h3>
        </div>
        <span
          className="text-white text-2xl font-bold"
          ref={percentageRef}
          aria-label={`Progress at ${percentage}%`}
        >
          0%
        </span>
      </div>
      <div className="relative w-full bg-white h-2 mt-4 rounded-lg overflow-hidden ml-36" >
        <div
          className={`h-2 rounded-lg ${barColor}`}
          ref={barRef}
          aria-label={`Progress bar showing ${percentage}%`}
        ></div>
      </div>
      <p className="text-gray-400 text-sm mt-2 font-roboto" ref={descriptionRef}>
        {description}
      </p>
    </div>
  );
};

export default HorizontalTechStack;