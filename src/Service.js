import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img5 from "../src/Pictures/img5.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Android Development" imgsrc={img1} />
              <Card title="Web Development" imgsrc={img2} />
              {/* <Card title="Database Management" imgsrc={img3} /> */}
              {/* <Card title="Business Analytics" imgsrc={img4} /> */}
              <Card title="Digital Marketing" imgsrc={img5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
