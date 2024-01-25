import Image from "next/image";
import { Button } from "../ui/button";



const HeaderBanner = () => {
  return (
    <div className='flex items-center justify-center gap-10 mt-10 h-[700px]'>
      <div className='flex flex-col gap-4'>
        <span className='star flex flex-row '>
          <Image src={"/star.svg"} alt='' width={20} height={20} />
          <Image src={"/star.svg"} alt='' width={20} height={20} />
          <Image src={"/star.svg"} alt='' width={20} height={20} />
          <Image src={"/star.svg"} alt='' width={20} height={20} />
          <span className='ml-4 text-sm'>rated 4.8/5 (2463 reviews)</span>
        </span>
        <h1 className='font-bold text-5xl'>
          Create your portfolio
          <br /> in minutes
        </h1>
        <p className='desc'>
          with fiber you can setup your own personal portfolio in minutes <br /> with dozens of
          permade , beautifull template
        </p>
        <div className='flex gap-2'>
          <Button className='bg-indigo-600 hover:bg-indigo-400' size={"lg"}>
            Start Free Trial
          </Button>
          <Button
            className='text-indigo-600 bg-transparent text-lg hover:outline outline-1 outline-indigo-500 hover:text-indigo-500 '
            variant={"outline"}>
            view Example
          </Button>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex gap-3'>
            <Image src={"/Checkmark.svg"} alt='' width={20} height={20} />
            <span>No credit card Required</span>
          </div>
          <div className='flex gap-3'>
            <Image src={"/Checkmark.svg"} alt='' width={20} height={20} />
            <span>10 Free Template</span>
          </div>
        </div>
      </div>
      <div className='hidden md:flex'>
        <Image alt='banner' src={"/hero-Illustration.png"} width={600} height={600} objectFit='' />
      </div>
    </div>
  );
};

export default HeaderBanner;
