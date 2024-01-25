import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { LinkedButton } from "../ui/link-button";
import { NavbarLink } from "@/db/data";

const HamberDropdown = () => {
  return (
    <div className='md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image alt='hamburger-menu' src={"/Hamburger Menu.svg"} width={25} height={25} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {NavbarLink.map((link) => (
            <DropdownMenuItem key={link.title}>
              <Link href={link.href} className='hover:border-b-2 border-indigo-600'>
                <p>{link.title}</p>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <LinkedButton
              label='Log In'
              href='/auth/login'
              className='font-bold hover:outline outline-1 hover:text-indigo-900 outline-indigo-600  bg-transparent'
              variant={"outline"}
            />
            <LinkedButton
              label='Sign Up'
              href='/auth/register'
              className='font-bold bg-indigo-600 hover:bg-indigo-800'
              variant={"outline"}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HamberDropdown;
