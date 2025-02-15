import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import heroImg from "../../assets/mazen.png";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { SiCodewars } from "react-icons/si";
import { Canvas } from "@react-three/fiber";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero relative flex h-full flex-col overflow-hidden md:flex-row">
      {/* Background */}
      {/* <div className="absolute inset-0 z-[-1] bg-cover bg-center"></div> */}

      {/* Left Section */}
      <div className="left flex h-full w-full flex-col items-center gap-9 text-center md:w-1/2 md:items-start md:justify-between md:text-start">
        {/* TITLE */}
        <motion.h1
          className="hTitle mt-[50px] text-[48px] text-pink-500 md:text-[48px] lg:text-[72px] xl:text-[88px] 2xl:text-[72px]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hey There,
          <br />
          <span className="text-white">I&apos;m Mazen!</span>
        </motion.h1>

        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards w-full md:w-[60%] xl:w-[30%]"
        >
          <motion.h2 variants={awardVariants} className="font-bold">
            Web Developer
          </motion.h2>
          <motion.p
            variants={awardVariants}
            className="my-3 text-sm text-[#ddd]"
          >
            React.JS, Angular, TS
          </motion.p>

          {/* awards list */}
          <motion.div className="awardList flex items-center justify-center gap-2 md:items-start md:justify-start">
            <a
              href="https://www.linkedin.com/in/ahmadmazen060/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-12 w-12 rounded-full bg-white p-2 text-blue-500" />
            </a>
            <a
              href="https://github.com/ahmad-mazen-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-12 w-12 rounded-full bg-white p-2 text-black" />
            </a>
            <a
              href="https://www.codewars.com/users/ahmad_mazen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodewars className="h-12 w-12 rounded-full bg-white p-2 text-black" />
            </a>
          </motion.div>
        </motion.div>

        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="mb-[50px] w-max"
          aria-label="Scroll down to services section"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M12 5V8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="right flex h-full w-full flex-col items-end justify-end md:w-1/2 md:justify-between">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow hidden flex-col gap-3 rounded-br-[10px] bg-[#2f204e] p-4 md:flex"
          aria-label="Follow me on social media"
        >
          <div className="flex flex-col gap-3">
            <motion.a
              variants={followVariants}
              href="https://www.instagram.com/ahmadmazen_1/"
              aria-label="Follow me on Instagram"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="h-5 w-5"
                loading="lazy"
              />
            </motion.a>
            <motion.a
              variants={followVariants}
              href="https://www.behance.net/hmdm8"
              aria-label="Follow me on Facebook"
            >
              <FaBehanceSquare className="h-5 w-5" />
            </motion.a>
            <motion.a
              variants={followVariants}
              href="https://www.behance.net/hmdm8"
              aria-label="Follow me on Facebook"
            >
              <PiLinktreeLogoBold className="h-5 w-5" />
            </motion.a>
          </div>
          <motion.div variants={followVariants} className="h-5 w-5">
            <div className="flex h-full w-max origin-bottom-left -translate-y-5 rotate-90 items-center rounded-br-[10px] bg-[#DD4C62] px-4 text-xs text-white">
              FOLLOW ME
            </div>
          </motion.div>
        </motion.div>

        {/* BUBBLE */}
        <Speech />

        {/* CONTACT BUTTON */}
        <motion.a
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
          href="/#contact"
          className="contactLink mb-[50px]"
          aria-label="Go to contact section"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="contactButton relative"
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-20 w-20 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      {/* canvas background */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-cover bg-center md:bottom-0">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        {/* Background Image */}
        <div className="absolute bottom-0 left-0 right-0 m-auto h-[80%] max-w-max">
          <img
            src={heroImg}
            alt="Hero Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
