"use client";

import Link from "next/link";

import { Button } from "./button";

interface LinkedButtonProps {
  href: string;
  label: string;
}

export const LinkedButton = ({ href, label }: LinkedButtonProps) => {
  return (
    <Button variant='link' className='font-normal w-full' size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
