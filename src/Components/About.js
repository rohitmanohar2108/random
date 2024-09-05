import React from "react";
import { useRef } from "react";

const About = () => {
  const lettersRef = useRef([]);

  return (
    <div className="relative z-10">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="behind-content">
          <div className="text-overlay">
            <div className="font-acme text-9xl mt-96 text-violet-600">
              <div>
                {"Hi There!".split("").map((char, index) => (
                  <span
                    key={index}
                    ref={(el) => (lettersRef.current[index] = el)}
                    className="inline-block" // inline-block prevents line breaks
                  >
                    {char === " " ? "\u00A0" : char}{" "}
                    {/* Non-breaking space for spaces */}
                  </span>
                ))}
              </div>
              <div className="font-bold text-3xl text-amber-400">
                I am into WebDev
              </div>
              
            </div>
          </div>
        </div>

        <div className="mockup mockup-macbook loaded opened ml-96 mt-9">
          <div className="part top">
            <img
              src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg"
              alt=""
              className="top"
            />
            <img
              src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
              alt=""
              className="cover"
            />
            <img
              src="https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_5XySWqeTsJYccXgiU6pbTXmjkpih%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_69W1g56UQ3afqs1J92SU1Cogwcak"
              alt="Laptop Screen"
              className="screen-image"
            />
          </div>
          <div className="part bottom">
            <img
              src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
              alt=""
              className="cover"
            />
            <img
              src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg"
              alt=""
              className="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
