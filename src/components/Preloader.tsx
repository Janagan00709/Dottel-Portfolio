import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Container.module.css";

/* Framer motion variants */
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.001 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const words = [
  
  "𝕯𝖔𝖙𝖙𝖊𝖑",
  "𝙳𝚘𝚝𝚝𝚎𝚕",
  "刀口丅丅乇乚",
  "ᴅᴏᴛᴛᴇʟ",
  "𝕯𝖔𝖙𝖙𝖊𝖑",
  "𝔻𝕠𝕥𝕥𝕖𝕝",
 
 " 𝐃𝐨𝐭𝐭𝐞𝐥",

];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial dimension
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run only once

  // Update the index every 100ms to show the next word
  useEffect(() => {
    if (index === words.length - 1) return; // Stop when the last word is reached
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [index]);

  // Memoize the paths to avoid recalculating on every render
  const paths = useMemo(() => {
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    return { initialPath, targetPath };
  }, [dimension]);

  const curve = {
    initial: {
      d: paths.initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: paths.targetPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  );
}
