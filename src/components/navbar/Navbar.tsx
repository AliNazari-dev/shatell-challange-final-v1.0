import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { LinkedButton } from "../ui/link-button";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center h-32'>
      <div>
        <p className='font-bold text-2xl'>Fiber</p>
      </div>
      <div className='hidden md:flex flex-row gap-3 font-bold text-md'>
        <Link href={""} className='hover:border-b-2 border-indigo-600'>
          <p>Community</p>
        </Link>
        <Link href={""} className='hover:border-b-2 border-indigo-600'>
          <p>Pricing</p>
        </Link>
        <Link href={""} className='hover:border-b-2 border-indigo-600'>
          <p>Features</p>
        </Link>
      </div>
      <div className='md:flex gap-2 hidden'>
        <Link href={"/auth/login"}>
          <Button
            variant={"outline"}
            size={"lg"}
            className='font-bold hover:outline outline-1 hover:text-indigo-900 outline-indigo-600  bg-transparent'>
            Log In
          </Button>
        </Link>
        <Link href={""}>
          <Button className='font-bold bg-indigo-600 hover:bg-indigo-800' size={"lg"}>
            Sign Up
          </Button>
        </Link>
      </div>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image alt='' src={"/Hamburger Menu.svg"} width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={""} className='hover:border-b-2 border-indigo-600'>
                <p>Community</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={""} className='hover:border-b-2 border-indigo-600'>
                <p>Pricing</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={""} className='hover:border-b-2 border-indigo-600'>
                <p>Features</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LinkedButton
                label='Login In'
                href='/auth/login'
                className='font-bold hover:outline outline-1 hover:text-indigo-900 outline-indigo-600  bg-transparent'
                variant={"outline"}
              />
              {/* <Link href={"/auth/login"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className='font-bold hover:outline outline-1 hover:text-indigo-900 outline-indigo-600  bg-transparent'>
                  Log In
                </Button>
              </Link>
              <Link href={""}>
                <Button className='font-bold bg-indigo-600 hover:bg-indigo-800' size={"lg"}>
                  Sign Up
                </Button>
              </Link> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
