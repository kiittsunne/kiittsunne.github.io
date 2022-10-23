import React from "react";
import * as imagestyle from "./index.module.scss";

export type ImageProps = {
  src: string;
  alt: string;
  maxWidth?: string;
};

const Image = ({ src, alt, maxWidth }: ImageProps) => {
  return (
    <div className={imagestyle.wrapper} style={{ maxWidth: maxWidth }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
