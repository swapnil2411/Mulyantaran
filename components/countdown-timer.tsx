"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 100,
    hours: 75,
    minutes: 60,
    seconds: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 lg:gap-2 mt-20 bg-[#1a1a1a] p-2 rounded-2xl justify-center">
      <FlipUnit label="DAYS" value={timeLeft.days} />
      <FlipUnit label="HOURS" value={timeLeft.hours} />
      <FlipUnit label="MINUTES" value={timeLeft.minutes} />
      <FlipUnit label="SECONDS" value={timeLeft.seconds} />
    </div>
  );
}

function FlipUnit({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="bg-black rounded-2xl shadow-[inset_0_0_18px_rgba(255,255,255,0.06),0_6px_18px_rgba(0,0,0,0.7)]
                 flex flex-col items-center 
                 w-[90px] lg:w-[140px] h-[130px] lg:h-[130px] px-4 py-5"
    >
     
      <div className="text-[10px] lg:text-xs font-mulyantaran-regular text-gray-300 uppercase tracking-widest  text-center">
        {label}
      </div>

      {/* Number with smooth flip */}
      <div className="overflow-hidden flex-1 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ rotateX: 90, opacity: 0, y: 30 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: -90, opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="block text-4xl lg:text-6xl font-mulyantaran-bold 
                       bg-gradient-to-b from-white to-gray-400 
                       bg-clip-text text-transparent leading-none"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
