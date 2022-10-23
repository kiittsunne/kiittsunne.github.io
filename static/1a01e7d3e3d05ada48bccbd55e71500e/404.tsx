import * as React from "react";
import { Link, HeadFC } from "gatsby";

const NotFoundPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "35vh",
          justifyContent: "center",
          fontFamily: "monospace",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1>
          0_0 <br /> How'd you end up here?
        </h1>
        <code
          style={{
            padding: "1em 1.5em 1em 1.5em",
            backgroundColor: "lightgoldenrodyellow",
            fontWeight: "bold",
            marginTop: ".75em",
          }}
        >
          head <Link to="/">back</Link>
        </code>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
