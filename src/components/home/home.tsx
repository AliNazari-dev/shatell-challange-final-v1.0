import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import AdvantagesUs from "../advantageSection/AdvantagesUs";
import MainBanner from "../mainBanner";
import CommentSlider from "../comment/CommentSlider";

const HomePage = () => {
  return (
    <div className='justify-center flex flex-col w-3/4 self-center gap-14'>
      <Header />
      <AdvantagesUs />
      <MainBanner />
      <CommentSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
