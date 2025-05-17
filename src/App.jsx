import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import flowerData from "./flowerData";
import GateIntro from "./components/GateIntro";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowTitle(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setSelectedFlower(null);

  return (
    <>
      <div className="garden-wrapper">
        <div className="garden-background">
          {/* 🟫 Gate Animation */}
          <AnimatePresence>{showIntro && <GateIntro />}</AnimatePresence>

          {/* 🌤️ Persistent Sky Title */}
          {showTitle && (
            <h1 className="sky-title">Welcome to the Garden</h1>
          )}

          {/* 🗾 Pond Image */}
          <img
            src="/pond.png"
            alt="Pond"
            className="pond"
            style={{
              position: "absolute",
              left: "54%",
              top: "62%",
              width: "18%",
              transform: "translate(-50%, -50%)",
              zIndex: 1
            }}
          />

          {/* 🌸 Flowers */}
          {flowerData.map((flower, index) => (
            <div
              key={index}
              className={`flower-container ${flower.layer}`}
              style={{
                left: `${flower.x}%`,
                bottom: `${flower.y}%`,
                transform: `rotate(${flower.rotation}deg)`,
                zIndex: flower.name === "Binh" ? 2 : flower.zIndex || 1
              }}
              onClick={() => setSelectedFlower(flower)}
            >
              <img
                src={flower.image}
                alt={flower.name}
                style={{
                  width: `${80 * (flower.scale || 1)}px`,
                  height: "auto",
                  pointerEvents: "auto"
                }}
              />
            </div>
          ))}

          {/* 💬 Popup Box */}
          {selectedFlower && (
            <div className="popup-box">
              <div className="popup-content">
                <button className="close-button" onClick={closePopup}>✕</button>
                <img
                  src={selectedFlower.image}
                  alt={selectedFlower.name}
                  className="popup-flower-image"
                  style={{
                    transformOrigin: "center",
                    width: "150px",
                    height: "auto"
                  }}
                />
                <h2>{selectedFlower.name}</h2>
                <p>{selectedFlower.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
