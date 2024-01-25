"use client";

import AuthBanner from "@/src/components/auth/auth-banner";
import { LoginForm } from "@/src/components/auth/login-form";
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
      <LoginForm />
      <AuthBanner />
    </div>
  );
};

export default Login;
