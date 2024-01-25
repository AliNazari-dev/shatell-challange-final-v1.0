"use client";

import Link from "next/link";

import { Button } from "./button";

interface LinkedButtonProps {
  href: string;
  label: string;
  className?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const LinkedButton = ({
  href,
  label,
  variant,
  className,
  size,
}: LinkedButtonProps) => {
  return (
    <Button variant={variant} className={`font-normal w-full ${className}`} size={size} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
