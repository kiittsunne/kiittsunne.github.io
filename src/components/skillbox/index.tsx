import React, { useState } from "react";
import * as skillbox from "./index.module.scss";

const Skillbox = (props: any) => {
  const [isHover, setIsHover] = useState(props.cubeUp);

  return (
    <div
      className={skillbox.wrapper}
      onMouseEnter={() => {
        setIsHover(props.cubeDown);
      }}
      onMouseLeave={() => {
        setIsHover(props.cubeUp);
      }}
    >
      <div className={skillbox.header}>
        <img src={isHover} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
      <div className={skillbox.body}>
        <div>{props.decorTop}</div>
        <p>{props.elaboration}</p>
        <div>{props.decorBottom}</div>
      </div>
    </div>
  );
};

export default Skillbox;
