import React from "react";
import { ImageProps } from "../img";
import Image from "../img";
import * as gallery from "./index.module.scss";

const Gallery = ({
  images,
  maxWidth,
}: {
  images: ImageProps[];
  maxWidth: string;
}) => {
  return (
    <div className={gallery.wrapper} style={{ maxWidth: maxWidth }}>
      {images.map((image) => (
        <Image {...image} />
      ))}
    </div>
  );
};

export default Gallery;
