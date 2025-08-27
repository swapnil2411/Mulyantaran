import { stats } from "@/constants";
import React from "react";

const InfoCardSection = () => {
  return (
    <section className="flex flex-wrap  justify-center items-stretch text-white gap-6 w-full pt-16">
   {stats.map((card, idx) => (
        <div
          key={card.label}
          className="flex flex-col justify-center items-center flex-grow min-w-[220px] max-w-xs w-full h-[180px] sm:h-[223px] gap-2.5 px-4 py-8 rounded-[31px]"
          style={{
            background: "linear-gradient(137.36deg, #252525 3.5%, #111 92.15%)",
          }}
        >
          <div className="flex flex-col justify-center items-center w-full gap-6">
            <p className="w-full text-amber-900 text-5xl sm:text-[80px] font-semibold text-center">
              {card.value}
            </p>
            <p className="text-base font-light text-center">
              {card.label}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoCardSection;
