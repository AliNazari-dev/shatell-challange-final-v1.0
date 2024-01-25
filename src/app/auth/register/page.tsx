import AuthBanner from "@/src/components/auth/auth-banner";
import { RegisterForm } from "@/src/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className='bg-white flex rounded-md '>
      <RegisterForm />
      <AuthBanner />
    </div>
  );
};

export default RegisterPage;
