"use client";
import React from "react";
import Image from "next/image";
import { FancyLabel } from "@/components/ui/fancy-label";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  twitter: string;
  gradient?: string; 
};

type TestimonialCardProps = {
  person: TeamMember;
  index: number;
};

const team: TeamMember[] = [
  {
    name: "Alexander Reynolds",
    role: "CEO & Founder",
    img: "/images/avatar-1.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sophia Zhang",
    role: "CTO",
    img: "/images/avatar-2.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Johnson",
    role: "COO",
    img: "/images/avatar-3.png",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Olivia Patel",
    role: "Head of Product",
    img: "/images/avatar-4.png",
    linkedin: "#",
    twitter: "#",
  },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ person, index }) => {
  return (
    <div className="group relative h-[26rem] w-full overflow-hidden cursor-pointer transform transition-all duration-500">
    
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url(${person.img})`,
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${person.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`}
      />

      <div className="absolute inset-0 flex items-center justify-center p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <div className="rounded-2xl p-4 text-center">
          <h3 className="text-xl font-mulyantaran-light text-mulyantaran-white">
            {person.name}
          </h3>
          <p className="text-[#B3B3B3] font-mulyantaran-light text-sm">
            {person.role}
          </p>
          <div className="flex gap-2 items-center justify-center mt-1">
            <a
              href={person.linkedin}
              className="flex items-center justify-center"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                src="/icons/linkedin.svg"
                height={20}
                width={20}
                alt="linkedin"
              />
            </a>
            <a
              href={person.twitter}
              className="flex items-center justify-center"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                src="/icons/facebook.svg"
                height={20}
                width={20}
                alt="facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <FancyLabel text="Success Stories" imageSrc="/icons/star.svg" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mulyantaran-light text-mulyantaran-white my-4 leading-tight">
            Trusted by Leading Traders
          </h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl font-mulyantaran-light mx-auto">
            See how professional traders and institutions are achieving
            exceptional results with Mulyantaran.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((person, index) => (
            <TestimonialCard key={index} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
