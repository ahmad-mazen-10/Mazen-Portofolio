import { motion, useInView } from "motion/react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    color: "#dd4c62",
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div
      className="services flex h-full items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* left */}
      <div className="sSection left flex w-full flex-col justify-center xl:w-1/2">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle mb-[24px] text-[48px] md:text-[80px]"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList flex flex-col gap-[16px]"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service flex w-full cursor-pointer items-center gap-4 rounded-[20px] bg-[#2f213f] p-[30px] lg:w-[50%]"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon flex h-[48px] w-[48px] items-center justify-center rounded-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-6 w-6"
                  style={{ backgroundColor: service.color }}
                />
              </div>
              <div className="serviceInfo">
                <h2 className="mb-2 text-lg font-medium">{service.title}</h2>
                <h3 className="text-[13px] font-light">
                  <a href="https://github.com/ahmad-mazen-10" target="_blank">Projects</a>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* right */}
      <div className="sSection right hidden h-full w-1/2 flex-col justify-center xl:flex">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
