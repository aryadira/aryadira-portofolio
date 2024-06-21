import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Loader() {
  const loader: any = useRef(null);
  const path: any = useRef(null);
  const initialCurve = 200;
  const duration = 600;
  let start: any;

  useEffect(() => {
    setPath(initialCurve);

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp: any) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);

    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time: any, start: any, end: any, duration: any) => {
    return -end * (time /= duration) * (time - 2) + start;
  };

  const loaderHeight = () => {
    if (loader.current) {
      const loaderBounds = loader.current.getBoundingClientRect();
      return loaderBounds.height;
    }
    return 0;
  };

  const setPath = (curve: any) => {
    const width = window.innerWidth;
    const height = loaderHeight();
    path.current.setAttributeNS(
      null,
      "d",
      `M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`
    );
  };

  return (
    <div ref={loader} className={styles.loader + " absolute top-0 left-0 z-50"}>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
