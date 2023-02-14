import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import Shop2 from "../images/Shop2.png";
function Newsection({ myData }) {
  const { name } = myData;

  return (
    <>
      <div className="Container">
        <div className="grid grid-two-column">
          <div className="section-data">
            <p className=" text-1xl font-bold underline ">Welcome to </p>
            <h1>{name}</h1>
            <p className="text-3xl">
              A clothes shop or clothes store is any shop which sells items of
              ready-made clothing. A small shop which sells expensive or
              designer clothing may be called a boutique. A shop that sells
              clothes for a narrowly-restricted market such as school uniforms
              or outdoor sports may be called an outfitter.
            </p>
            <NavLink to="">
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* for homepage image */}
          <div className="section-image">
            <figure>
              <img src={Shop2} alt="Shopping here" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsection;
