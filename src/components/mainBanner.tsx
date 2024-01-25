import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const MainBanner = () => {
  return (
    <div className='flex flex-wrap items-center bg-indigo-700 text-white p-4 rounded-lg'>
      <div className='w-full md:w-1/2 md:p-8 flex flex-col gap-5'>
        <h1 className='text-3xl font-bold mb-4'>Diversy your portfolio</h1>
        <p>
          create an event more impressive portfolio by <br /> creating case studios for your project
          . <br /> Simply follow our step-by-step guid
        </p>
        <Link href={""}>
          <Button variant={"secondary"} className='bg-white text-indigo-500 font-bold' size={"sm"}>
            Start Free Trial
          </Button>
        </Link>
      </div>
      <div className='w-full md:w-1/2 overflow-hidden'>
        <Image className='mt-10' alt='banner' src={"/Page Image.png"} width={500} height={300} />
      </div>
    </div>
  );
};

export default MainBanner;
