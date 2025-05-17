import React, { useEffect, useState } from "react";
import "./GateIntro.css";

const GateIntro = ({ onComplete }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    const cleanup = setTimeout(() => {
      onComplete(); // notify App it's done
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onComplete]);

  return (
    <div className={`gate-intro ${open ? "open" : ""}`}>
      <div className="gate-left"></div>
      <div className="gate-right"></div>
      <h1 className={`gate-title ${open ? "gate-title-move-up" : ""}`}>
        Welcome to the Garden
      </h1>
    </div>
  );
};

export default GateIntro;
