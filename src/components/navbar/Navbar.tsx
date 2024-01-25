import Link from "next/link";
import { Button } from "../ui/button";
import HamberDropdown from "./HamberDropdown";
import { LinkedButton } from "../ui/link-button";
import { NavbarLink } from "@/db/data";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center h-32'>
      <div>
        <p className='font-bold text-2xl'>Fiber</p>
      </div>
      <div className='hidden md:flex flex-row gap-3 font-bold text-md'>
        {NavbarLink.map((link) => (
          <Link key={link.title} href={link.href} className='hover:border-b-2 border-indigo-600'>
            <p>{link.title}</p>
          </Link>
        ))}
      </div>
      <div className='md:flex gap-2 hidden'>
        <LinkedButton
          label='Log In'
          href='/auth/login'
          className='font-bold hover:outline outline-1 hover:text-indigo-900 outline-indigo-600  bg-transparent'
          variant={"outline"}
        />
        <LinkedButton
          label='Sign Up'
          href='/auth/register'
          className='font-bold bg-indigo-600 hover:bg-indigo-400 hover:text-white text-white'
          variant={"outline"}
        />
      </div>
      <HamberDropdown />
    </div>
  );
};

export default Navbar;
