import React from "react";
import AdvantageCard from "./AdvantageCard";
import { advantage } from "@/db/data";

const AdvantagesUs = () => {
  return (
    <div className='flex flex-col gap-5 md:mt-10 bg-white'>
      <h2 className='text-md font-bold text-indigo-600'>Why Fiber ?</h2>
      <h1 className='text-4xl font-bold'>
        A good portfolio means good <br />
        employability
      </h1>
      <div className='flex gap-5 flex-col md:flex-row'>
        {advantage.map((advantage) => (
          <AdvantageCard key={advantage.id} AdvatageData={advantage} />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesUs;
