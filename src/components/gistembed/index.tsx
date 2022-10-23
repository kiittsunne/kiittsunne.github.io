import React from "react";
import * as gist from "./index.module.scss";

type iframeDimensions = {
  height?: number;
  width?: number;
};

const Gist = ({ height, width }: iframeDimensions) => {
  return (
    <div className={gist.wrapper} style={{ height: height, width: width }}>
      <iframe
        src="data:text/html;charset=utf-8,
    <head><base target='_blank' /></head>
    <body><script src='https://gist.github.com/kiittsunne/ff4a5b6faba000fff4fbbd02c4d640d6.js'></script>
    </body>"
      ></iframe>
    </div>
  );
};

export default Gist;
