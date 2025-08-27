"use client";
import Image from "next/image";
import { useState } from "react";

export default function Index() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/svg/emailBg.svg"
          alt="Background Pattern"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
      </div>
      <div className="absolute   top-[450px] z-30 pointer-events-none">
        <Image
          src="/svg/emailBg2.svg"
          alt="Background Pattern"
          className=" opacity-100"
          width={1920}
          height={1080}
          priority
        />
      </div>

      {/* <div className="w-full  absolute h-48 bottom-0 bg-black">
        <div className="relative w-full h-full">
          <Image
            src="/svg/emailBg2.svg"
            alt="Background Pattern"
            fill
            className="object-cover absolute top-80 opacity-100"
            priority
          />
        </div>
      </div> */}

     


      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
        <div className="text-center mb-4 lg:mb-8">
          {/* Main heading with gradient text */}
          <div className="space-y-2 mb-6 lg:mb-10">
            <h1 className="font-mulyantaran-thin text-mulyantaran-white text-6xl sm:text-7xl md:text-8xl lg:text-[160px] xl:text-[160px] font-light leading-[0.8] tracking-[-0.03em]">
              Ready to
            </h1>
            <h1 className="font-mulyantaran-semibold text-6xl sm:text-7xl md:text-8xl lg:text-[160px] xl:text-[160px] font-mulyantaran-bold leading-[0.8] tracking-[-0.03em] text-mulyantaran-white">
              scale your
            </h1>
            <h1 className="font-mulyantaran-thin text-mulyantaran-white text-6xl sm:text-7xl md:text-8xl lg:text-[160px] xl:text-[160px] font-light leading-[0.8] tracking-[-0.03em]">
              Incomes?
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-mulyantaran-light px-6  text-lg sm:text-xl md:text-2xl font-normal leading-normal tracking-[-0.03em] max-w-md lg:max-w-lg mx-auto mb-2 lg:mb-3 text-[#B3B3B3]">
            Crafting exceptional digital experiences for your <br /> business
            success.
          </p>
        </div>

        {/* Email subscription form */}
        <form className="relative w-full max-w-lg lg:max-w-2xl">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email ID"
              className="w-full h-12 lg:h-[60px] pl-5 lg:pl-6 pr-40 lg:pr-48 rounded-2xl lg:rounded-[18px] font-mulyantaran-light text-sm lg:text-base outline-none border-none bg-[#2B2B2B] text-[#B3B3B3] placeholder-[#B3B3B3]"
              required
            />
            <div
              className="absolute right-1.5 lg:right-1.5 top-1.5 lg:top-1.5 h-9 lg:h-12 flex items-center rounded-2xl lg:rounded-[18px] p-[2px]"
              style={{
                background: "linear-gradient(to bottom, #332A19, #ECD29F)",
              }}
            >
              <button
                type="submit"
                className="h-full cursor-pointer px-4 lg:px-8 font-outfit font-mulyantaran-bold text-sm lg:text-xl 
             text-mulyantaran-white hover:shadow-lg transition-all duration-200
             rounded-2xl lg:rounded-[16px] focus:outline-none
            "
                style={{
                  boxShadow: "0 24px 45px -48px rgba(207, 184, 138, 0.20)",
                  background:
                    "radial-gradient(ellipse at top, #ECD29F, #332A19)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
