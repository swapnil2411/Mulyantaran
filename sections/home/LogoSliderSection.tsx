"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const companies = [
  { name: "Interlock", icon: "/svg/interlock.svg" },
  { name: "CloudWatch", icon: "/svg/cloud.svg" },
  { name: "FeatherDev", icon: "/svg/feather.svg" },
  { name: "Spherule", icon: "/svg/spherule.svg" },
  { name: "Boltshift", icon: "/svg/bolt.svg" },
  { name: "FocalPoint", icon: "/svg/focal.svg" },
];

export function LogoSlider() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration: 20, 
          repeat: Infinity,
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <section className="py-12 bg-mulyantaran-black  overflow-hidden">
      <div className="relative flex items-center">
        <motion.div
          animate={controls}
          className="flex min-w-max"
        >
         {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mx-8 lg:mx-12 cursor-pointer group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={company.icon}
                alt={company.name}
                className="w-40 h-10 opacity-70 group-hover:opacity-100 transition duration-200"
              />
             
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
