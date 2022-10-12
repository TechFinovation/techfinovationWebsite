import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
      <div className="container">©️ TechFinovation Private Limited 2022</div>
    </>
  );
}

export default Home;
