"use client";

import Link from "next/link";

import { Button } from "./button";

interface LinkedButtonProps {
  href: string;
  label: string;
  className?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
}

export const LinkedButton = ({ href, label, variant = "link", className }: LinkedButtonProps) => {
  return (
    <Button variant={variant} className={`font-normal w-full ${className}`} size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
