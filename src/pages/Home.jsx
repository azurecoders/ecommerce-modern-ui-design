import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default Home;
