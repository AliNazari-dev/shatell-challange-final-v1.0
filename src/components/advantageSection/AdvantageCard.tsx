import { Advantage } from "@/types/types";
import Image from "next/image";
import React from "react";

interface AdvantageCardProps {
  className?: string;
  AdvatageData: Advantage;
}

const AdvantageCard = ({ AdvatageData }: AdvantageCardProps) => {
  const { icon, title, description } = AdvatageData;

  return (
    <div className='flex flex-col gap-2  p-3'>
      <Image src={icon} alt='' width={30} height={30} />
      <p className='font-bold text-lg'>{title}</p>
      <span className='font-bold text-gray-700'>{description}</span>
    </div>
  );
};

export default AdvantageCard;
