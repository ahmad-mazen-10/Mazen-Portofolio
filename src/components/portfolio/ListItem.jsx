import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PinContainer } from "../ui/Pin";

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

function ListItem({ item, titlePin, hrefPin }) {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className="m-4 flex h-full w-full flex-col flex-wrap items-center justify-center gap-10 overflow-hidden rounded py-4 lg:flex-row"
      ref={ref}
    >
      <PinContainer
        title={titlePin}
        href={hrefPin}
        className="flex h-full items-center justify-between rounded"
      >
        {/* img project  */}
        <motion.div
          variants={imgVariants}
          animate={isInView ? "animate" : "initial"}
          className="pImg mx-2 w-[50%] overflow-hidden rounded-[20px] lg:w-[50%]"
        >
          <img
            src={item.img}
            alt={item.title}
            className="h- w-full object-cover"
          />
        </motion.div>

        {/* text project  */}
        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="pText mr-3 flex flex-col gap-2 p-3 lg:w-[40%] lg:p-0"
        >
          <motion.h1
            variants={textVariants}
            className="text-[22px] md:text-[px]"
          >
            {item.title}
          </motion.h1>
          <motion.p variants={textVariants} className="font-light">
            {item.desc}
          </motion.p>
          <div className="flex flex-row">
            <motion.a variants={textVariants} href={item.linkDemo}>
              <button className="mr-2 cursor-pointer rounded-[10px] border-none bg-pink-500 p-2 font-medium">
                View Project
              </button>
            </motion.a>
            <motion.a variants={textVariants} href={item.linkRepo}>
              <button className="cursor-pointer rounded-[10px] border-none bg-pink-500 p-2 font-medium">
                View Repo
              </button>
            </motion.a>
          </div>
        </motion.div>
      </PinContainer>
    </div>
  );
}
export default ListItem;
