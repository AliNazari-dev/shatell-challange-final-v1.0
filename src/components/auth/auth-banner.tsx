import Image from "next/image";
import React from "react";

const AuthBanner = () => {
  return (
    <div className='bg-violet-700 lg:flex flex-col max-w-[400px] items-center gap-10 hidden w-full'>
      <div className='p-5'>
        <Image alt='banner' src={"/Sign Up Image.png"} width={400} height={600} />
      </div>
      <div className='flex flex-col gap-8 items-center'>
        <p className='text-3xl font-bold text-white text-center'>Unparalleld Templates</p>
        <span className='text-white text-center '>
          Crafted by a team of professional designer , our template are eunparalled in the market .
        </span>
      </div>
    </div>
  );
};

export default AuthBanner;
