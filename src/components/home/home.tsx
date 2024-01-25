import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const HomePage = () => {
  return (
    <div className='justify-center flex flex-col w-3/4 self-center gap-14'>
      <Header />
      <Footer />
    </div>
  );
};

export default HomePage;
