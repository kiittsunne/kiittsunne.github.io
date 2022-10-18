import React, { useState, useEffect } from "react";
import hyujiPng from "../../images/hyuji.png";
import * as hyuji from "./index.module.scss";

const Hyuji = () => {
  const [boxA, setBoxA] = useState(`${hyuji.box} ${hyuji.pupil} a`);
  const [boxB, setBoxB] = useState(`${hyuji.box} b`);
  const [boxC, setBoxC] = useState(`${hyuji.box} c`);
  const [boxD, setBoxD] = useState(`${hyuji.box} d`);

  useEffect(() => {
    const leftAnchor = document.getElementById("anchor");
    if (leftAnchor) {
      const leftRekt = leftAnchor.getBoundingClientRect();
      const leftAnchorX = leftRekt.left + leftRekt.width / 2;
      const leftAnchorY = leftRekt.top + leftRekt.height / 2;

      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const leftAngleDeg = angle(mouseX, mouseY, leftAnchorX, leftAnchorY);
        setBoxA(`${hyuji.box} a`);
        setBoxB(`${hyuji.box} b`);
        setBoxC(`${hyuji.box} c`);
        setBoxD(`${hyuji.box} d`);

        if (leftAngleDeg >= 0 && leftAngleDeg <= 90) {
          setBoxA(`${hyuji.box} a ${hyuji.pupil}`);
        } else if (leftAngleDeg > 90 && leftAngleDeg <= 180) {
          setBoxB(`${hyuji.box} b ${hyuji.pupil}`);
        } else if (-90 < leftAngleDeg && leftAngleDeg < 0) {
          setBoxC(`${hyuji.box} c ${hyuji.pupil}`);
        } else {
          setBoxD(`${hyuji.box} d ${hyuji.pupil}`);
        }
      });

      function angle(cx: number, cy: number, ex: number, ey: number) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        return deg;
      }
    }
  }, []);

  return (
    <div className={hyuji.container}>
      <img src={hyujiPng} className={hyuji.image} />
      <div id="anchor" className={`${hyuji.eye} ${hyuji.left}`}>
        <div className={boxA}></div>
        <div className={boxB}></div>
        <div className={boxC}></div>
        <div className={boxD}></div>
      </div>
      <div id="anchor" className={`${hyuji.eye} ${hyuji.right}`}>
        <div className={boxA}></div>
        <div className={boxB}></div>
        <div className={boxC}></div>
        <div className={boxD}></div>
      </div>
    </div>
  );
};

export default Hyuji;
