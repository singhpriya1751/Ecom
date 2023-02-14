import React from "react";
import Newsection from "./Newsection";
import Parts from "./Parts";
import Services from "./Services";
import Footer from "./Footer";
function Home() {
  const data = {
    name: "CLOTHING STORE",
  };
  return (
    <>
      <Newsection myData={data} />
      <Services />
      <Parts />
      <Footer />
      <h1> Welcome</h1>
    </>
  );
}

export default Home;
