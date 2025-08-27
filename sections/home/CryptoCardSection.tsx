"use client";

import { FancyLabel } from "@/components/ui/fancy-label";
import Image from "next/image";
import React from "react";

type Feature = {
  title: string;
  description: string;
  iconSrc: string;
};

const features: Feature[] = [
  {
    title: "Global Acceptance",
    description: "Use your card at millions of locations worldwide",
    iconSrc: "/icons/global.png",
  },
  {
    title: "Instant Conversion",
    description: "Automatically converts crypto to fiat at point of sale",
    iconSrc: "/icons/conversion.png",
  },
  {
    title: "Cashback Rewards",
    description: "Earn up to 5% back in crypto on all purchases",
    iconSrc: "/icons/cashback.png",
  },
];

const CryptoCardSection: React.FC = () => {
  return (
    <section className="bg-black text-mulyantaran-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12 z-10 relative">
            <div className="flex items-start">
              <FancyLabel text="Cryptospend" imageSrc="/icons/star.svg" />
            </div>

            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-mulyantaran-light text-mulyantaran-white leading-tight mb-3">
                Crypto Card
              </h1>
              <p className="text-gray-300 text-lg font-mulyantaran-light leading-relaxed">
                Spend your earnings anywhere with our crypto-backed prepaid card
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 lg:space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mt-1">
                    <Image
                      src={feature.iconSrc}
                      alt={feature.title}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-mulyantaran-thin text-mulyantaran-white ">
                      {feature.title}
                    </h3>
                    <p className="text-[#B3B3B3] leading-relaxed font-mulyantaran-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="pt-4">
              <button className="btn-radial">Order Your Card Now</button>
            </div>
          </div>

          {/* Right Side*/}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                height={500}
                width={500}
                src="/images/cards.png"
                alt="Crypto cards stack showing mulyantaran branded cards"
                className="w-full h-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/5 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CryptoCardSection;
