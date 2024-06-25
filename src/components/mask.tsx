import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Mask {
  className?: string;
  children: any;
}

export default function Mask({ className, children }: Mask) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-5%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: any) => ({ y: "0", transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }),
  };

  return (
    <div ref={body}>
      <div className={`m-0 overflow-hidden ${className}`}>
        <motion.div variants={animation} initial='initial' animate={isInView ? "enter" : ""}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
