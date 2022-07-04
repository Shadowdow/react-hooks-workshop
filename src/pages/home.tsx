import React from "react";
import logoIcon from "../assert/icon/logo.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen">
      <img src={logoIcon} alt="" style={{ height: 600, width: 1200 }} />
      <div className="justify-center items-center h-auto mt-80">
        <Link to={"/HookBestEvent"} className="mr-36" id="hookBest">
          React Hooks最佳实践
        </Link>
        <Link to={"/HookTheory"} className="mr-36">
          React Hooks 原理
        </Link>
        <Link to={"/AdvanceTheory"}>React Hooks 进阶原理</Link>
      </div>
    </div>
  );
};

export default Home;
