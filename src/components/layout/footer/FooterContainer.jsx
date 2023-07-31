import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const FooterContainer = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default FooterContainer;
