import React, { ReactElement } from "react";
import "../styles/global.scss";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
