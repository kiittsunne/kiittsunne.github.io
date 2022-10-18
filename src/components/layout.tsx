import React, { ReactElement } from "react";
import "../globalstyles/index.module.scss";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
