"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { comments } from "@/db/data";
import CommentCard from "./CommentCard";

const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full'>
      <Slider {...settings}>
        {comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </Slider>
    </div>
  );
};

export default CommentSlider;
