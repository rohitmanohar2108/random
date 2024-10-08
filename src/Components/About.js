import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaPaintBrush, FaCogs, FaLaptopCode } from "react-icons/fa";
import CircularTimeline from "./CircularTimeline";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const lettersRef = useRef([]);
  const skillBoxesRef = useRef([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-black relative z-10">
      {/* Background animation */}

      {/* Content */}
      <div className="relative z-20">
        <div className="behind-content">
          <div className="text-overlay">
            <div className="font-acme text-9xl mt-96 text-pink-600">
              <div>
                {"Hi There!".split("").map((char, index) => (
                  <span
                    key={index}
                    ref={(el) => (lettersRef.current[index] = el)}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}{" "}
                  </span>
                ))}
              </div>
              <div className="font-bold text-3xl text-amber-400">
                I am into WebDev
              </div>
            </div>
          </div>
        </div>

        <div className="mockup mockup-macbook loaded opened ml-96 mt-20">
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
        <div className="text-center mt-32 font-acme">
          <h2 className="text-6xl font-acme text-pink-600">What I Am Doing</h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-28 h-3/5 w-3/5 ml-72"
          ref={(el) => (skillBoxesRef.current = el)}
        >
          {/* Box 1: Web Design */}
          <div className="border relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://www.exovia.de/wp-content/uploads/2021/04/was-ist-webdesign-einfuehrung.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPaintBrush className="text-amber-500 text-5xl mb-3" />
              <h3 className="text-white text-3xl mb-2 font-acme">Web Design</h3>
              <p className="text-white text-sm font-roboto">
                Creating visually appealing designs and user interfaces for
                websites. Expertise in UI/UX principles, responsive design, and
                modern design tools.
              </p>
            </div>
          </div>

          {/* Box 2: Web Development */}
          <div className="border relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaLaptopCode className="text-amber-500 text-5xl mb-3" />
              <h3 className="text-white text-3xl mb-2 font-acme">
                Web Development
              </h3>
              <p className="text-white text-sm font-roboto">
                Building and maintaining websites using various technologies
                such as HTML, CSS, JavaScript, and frameworks like React. Focus
                on performance and scalability.
              </p>
            </div>
          </div>

          {/* Box 3: Software Development */}
          <div className="border relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <FaCode className="text-amber-500 text-5xl mb-3" />
              <h3 className="text-white text-3xl mb-2 font-acme">
                Software Development
              </h3>
              <p className="text-white text-sm font-roboto">
                Developing software solutions with a focus on algorithms, data
                structures, and code optimization. Proficient in languages like
                Java and C++.
              </p>
            </div>
          </div>

          {/* Box 4: Front-End */}
          <div className="border relative p-6 rounded-lg flex flex-col items-center text-center skill-box font-acme group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage:
                  "url('https://media.licdn.com/dms/image/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/0/1716965604025?e=2147483647&v=beta&t=QQbiRZaZNurRKVw6bW1J0hG5x2f-7PMAowmfdFF3Dz4')",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaCogs className="text-amber-500 text-5xl mb-3" />
              <h3 className="text-white text-3xl mb-2 font-acme">Front-End</h3>
              <p className="text-white text-sm font-roboto">
                Specializing in creating interactive and dynamic user
                interfaces. Experienced with frameworks such as React, ensuring
                a smooth and engaging user experience.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-6xl font-acme text-pink-600 mb-12 ml-96">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-72  w-3/4">
              <CircularTimeline
                percentage={90}
                title="Web Development"
                description="Experienced in building web applications using React and other modern web technologies."
              />
              <CircularTimeline
                percentage={50}
                title="Data Structures & Algorithms"
                description="Decent problem-solving using DSA, with experience in programming."
              />
              <CircularTimeline
                percentage={75}
                title="Graphic UI Design"
                description="Skilled in designing intuitive user interfaces and experiences with a focus on user-centric design."
              />
              <CircularTimeline
                percentage={85}
                title="Front-End Development"
                description="Specialized in creating responsive, dynamic, and interactive user interfaces using React and Tailwind-CSS."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;