import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4  justify-center'>
      <h1 className={cn("text-3xl font-bold", font.className)}>
        <Link href={"/"}>Fiber</Link>
      </h1>
      <p className='text-muted-foreground font-bold text-sm'>{label}</p>
    </div>
  );
};
