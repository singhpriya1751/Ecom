import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

function Errorpage() {
  return (
    <>
      <div className="error-page">
        <div>
          <h2>202</h2>
          <h2>OHH HO! You're lost.</h2>
          <p>
            The page you are looking does not exist.How you got here is a
            mystery,But youo can click the button below and go to back on the
            homepage.
          </p>
          <NavLink to={"/"}>
            <Button>Go back to home page.</Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Errorpage;
