// app/components/SubscriptionPlanSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import Image from 'next/image';
import { CircleCheckBig, CircleX } from 'lucide-react';

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular: boolean;
features: { text: string; included: boolean }[];
}

const SubscriptionPlanSection: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string>('Pro Plan');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -60,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const rippleVariants: Variants = {
    hidden: { scale: 0, opacity: 0.5 },
    visible: {
      scale: 1.5,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const plans: Plan[] = [
    {
      name: 'Starter Plan',
      subtitle: 'Billed monthly',
      price: '$19',
      period: 'per month',
      isPopular: false,
       features: [
        { text: '5 trading pairs', included: true },
        { text: 'Basic market analysis', included: true },
        { text: 'Email notifications', included: true },
        { text: 'Advanced analytics', included: false }, 
      ],
    },
    {
      name: 'Pro Plan',
      subtitle: 'Billed monthly',
      price: '$49',
      period: 'per month',
      isPopular: false,
      features: [
        { text: '20 trading pairs', included: true },
        { text: 'Advanced market analysis', included: true },
        { text: 'Real-time notifications', included: true },
        { text: 'Basic analytics dashboard', included: true },
      ],
    },
    {
      name: 'Business Plan',
      subtitle: 'Billed monthly',
      price: '$99',
      period: 'per month',
      isPopular: false,
     features: [
        { text: '50 trading pairs', included: true },
        { text: 'Premium market analysis', included: true },
        { text: 'Priority notifications', included: true },
        { text: 'Full analytics suite', included: true },
      ],
    },
    {
      name: 'Enterprise Plan',
      subtitle: 'Billed monthly',
      price: '$199',
      period: 'per month',
      isPopular: false,
       features: [
        { text: 'Unlimited trading pairs', included: true },
        { text: 'Enterprise-grade analysis', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom API integration', included: true },
      ],
    },
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.h2
            variants={titleVariants}
            className="text-mulyantaran-white text-4xl md:text-5xl font-mulyantaran-light text-center mb-16 "
          >
            Subscription Plans
          </motion.h2>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan) => {
              const isActive = activePlan === plan.name;
              return (
                <motion.div
                  key={plan.name}
                  variants={cardVariants}
                  className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer`}
                  onClick={() => setActivePlan(plan.name)}
                  style={{
                    backgroundImage: `url(${isActive ? '/images/active.png' : '/images/not-active.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                 

                  {/* Plan Header */}
                    <div className="mb-8 relative z-10 flex items-center gap-3">
                    <Image
                      src={isActive ? '/images/active-radio.png' : '/images/not-active-radio.png'}
                      alt="radio"
                      width={30}
                      height={30}
                    />
                    <div>
                      <h3 className="text-mulyantaran-white text-lg font-mulyantaran-light">{plan.name}</h3>
                      <p className="text-[#B3B3B3] text-sm font-mulyantaran-light">{plan.subtitle}</p>
                    </div>
                  </div>


                  {/* Price */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-mulyantaran-white text-6xl font-mulyantaran-light">{plan.price}</span>
                      <span className="text-[#B3B3B3] text-sm font-mulyantaran-light">{plan.period}</span>
                    </div>
                  </div>

                  {/* Get Started Button */}
                 <motion.button
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 mb-8 relative z-10 text-sm font-mulyantaran-light ${
                      isActive
                        ? 'btn-radial !py-3 !px-6 text-mulyantaran-white rounded-full !font-mulyantaran-thin'
                        : 'bg-black text-mulyantaran-white border border-white/40 rounded-lg'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePlan(plan.name);
                    }}
                  >
                    Get Started
                  </motion.button>

                  {/* Features */}
                  <div className="relative z-10">
                    <h4 className="text-mulyantaran-white text-2xl font-mulyantaran-light mb-4">What you will get</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                           <CircleCheckBig className='text-mulyantaran-white text-base'/>
                          //  <span className="text-mulyantaran-white border border-mulyantaran-white rounded-full text-lg">✔</span>
                          ) : (
                            <CircleX className="text-red-500 text-base"/>
                          )}
                          <span
                            className={`text-sm font-mulyantaran-light ${
                              feature.included ? 'text-gray-300' : 'text-gray-500 line-through'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionPlanSection;
