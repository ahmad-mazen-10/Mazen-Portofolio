import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  crud,
  dashboard_CAT,
  fetch_repos,
  hangman_game,
  memory_game,
  quiz_app,
  speech_text,
  test_speed,
  todo_app,
} from "../../assets/index.js";
import ListItem from "./ListItem.jsx";

const projects = [
  {
    id: 1,
    img: hangman_game,
    title: "Game Application JS",
    desc: "Game with JS depend on the correct answer",
    linkDemo: "https://hangman-game-three-beta.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Hangman-Game",
  },
  {
    id: 2,
    img: memory_game,
    title: "Game Application JS",
    desc: "Game with JS depend on memorize the opened cards",
    linkDemo: "https://memory-game-tau-pink.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Memory-Game",
  },
  {
    id: 3,
    img: quiz_app,
    title: "Quiz Application",
    desc: "Application with JS contain some question in web development",
    linkDemo: "https://github.com/ahmad-mazen-10/Quiz-App",
    linkRepo: "https://quiz-app-coral-omega.vercel.app/",
  },
  {
    id: 4,
    img: speech_text,
    title: "Speech Text",
    desc: "Application with JS you can text any thing and it can speech with voice",
    linkDemo: "https://speech-text-tau.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Speech-Text",
  },
  {
    id: 5,
    img: test_speed,
    title: "Test Speed",
    desc: "Application with JS can test speed writing on keyboard",
    linkDemo: "https://typing-speed-test-app-eight.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Typing-Speed-Test-App",
  },
  {
    id: 6,
    img: todo_app,
    title: "To Do Application",
    desc: "Application with JS you can control your tasks on it",
    linkDemo: "https://to-do-app-iota-smoky.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/To-Do-App",
  },
  {
    id: 7,
    img: fetch_repos,
    title: "Fetch Repos",
    desc: "Application with JS you can input any github-username to fetch his repos",
    linkDemo: "https://fetch-repos-seven.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Fetch-Repos",
  },
  {
    id: 8,
    img: crud,
    title: "CRUD System Operation",
    desc: "System store you can Create, Retrieve, Update, Delete any products",
    linkDemo: "https://cruds-gules.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/CRUDS",
  },
  {
    id: 9,
    img: dashboard_CAT,
    title: "Dashboard CAT",
    desc: "Dashboard Specialist (private) to CAT_Reloaded to HRs can manage task's new member and Interview date",
    linkDemo: "https://www.linkedin.com/in/ahmadmazen060/details/experience/",
    linkRepo: "https://www.linkedin.com/in/ahmadmazen060/details/experience/",
  },
];

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * projects.length],
  );

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  return (
    <div className="portfolio relative h-[600vh]" ref={ref}>
      <motion.div
        className="pList sticky top-0 flex h-[100vh] w-max"
        style={{ x: xTranslate }}
      >
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {projects.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            titlePin={item.title}
            hrefPin={item.linkDemo}
          />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />

      <div className="pProgress sticky bottom-[88%] left-0 h-[60px] w-[60px]">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
