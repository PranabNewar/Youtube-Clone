import React from "react";
import { Outlet } from "react-router-dom";

import Body from "./components/Body";
import Head from "./components/Head";

function Layout() {
  return (
    <>
      <Head />
      <Body />
    </>
  );
}
export default Layout;
