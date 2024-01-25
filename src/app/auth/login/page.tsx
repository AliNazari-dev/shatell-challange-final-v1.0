"use client";

import { LoginForm } from "@/src/components/auth/login-form";
import Image from "next/image";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      // Email is valid
      setIsValidEmail(true);
      // You can submit the form or perform other actions here
      console.log("Email is valid:", email);
    } else {
      // Email is not valid
      setIsValidEmail(false);
      console.log("Invalid email:", email);
    }

    // Prevent the form from submitting
    return false;
  };

  return (
    <div className='bg-white flex rounded-md '>
      <div>
        <LoginForm />
      </div>
      <div className='bg-violet-700 lg:flex flex-col max-w-[400px] items-center gap-10 hidden w-full'>
        <div className='p-5'>
          <Image alt='banner' src={"/Sign Up Image.png"} width={400} height={400} />
        </div>
        <div className='flex flex-col gap-8 items-center'>
          <p className='text-3xl font-bold text-white text-center'>Unparalleld Templates</p>
          <span className='text-white text-center '>
            Crafted by a team of professional designer , our template are eunparalled in the market
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
