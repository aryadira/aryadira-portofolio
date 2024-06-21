import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./page.module.css";

interface MaskText {
  className?: string;
  children: any;
}

export default function MaskText({ className, children }: MaskText) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: any) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }),
  };

  console.log(children);

  return (
    <div ref={body}>
      <div className={`m-0 overflow-hidden ${className}`}>
        <motion.p variants={animation} initial='initial' animate={isInView ? "enter" : ""}>
          {children}
        </motion.p>
      </div>
    </div>
  );
}
