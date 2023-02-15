import React from 'react';
import Newsection from './Newsection';
import Parts from './Parts';
import Services from './Services';
import Footer from './Footer';
function Home() {
  const data = {
    name: 'CLOTHING STORE',
  };
  return (
    <>
      <div className="container mt-4">
        <Newsection myData={data} />
        <Services />
        <Parts />
        <Footer />
        <h1> Welcome</h1>
      </div>
    </>
  );
}

export default Home;
