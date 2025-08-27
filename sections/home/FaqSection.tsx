"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What is arbitrage trading?",
      answer:
        "Arbitrage trading involves capitalizing on price differences of an asset across various exchanges, buying low on one and selling high on another for profit.",
    },
    {
      question: "How does Mulyantaran ensure profitability?",
      answer:
        "Mulyantaran uses advanced algorithms to detect real-time arbitrage opportunities, minimizing risks and maximizing returns for users.",
    },
    {
      question: "What fees does Mulyantaran charge?",
      answer:
        "Mulyantaran charges a small transaction fee per trade, with detailed breakdowns provided in the user dashboard for transparency.",
    },
    {
      question: "Can I trade 24/7 on Mulyantaran?",
      answer:
        "Yes, Mulyantaran operates 24/7, allowing users to trade anytime as markets are active globally.",
    },
    {
      question: "What cryptocurrencies are supported?",
      answer:
        "Mulyantaran supports major cryptocurrencies like Bitcoin, Ethereum, and Ripple, with plans to expand based on market trends.",
    },
    {
      question: "How do I start using Mulyantaran?",
      answer:
        "Sign up on our website, complete KYC verification, and deposit funds to begin trading with a user-friendly interface.",
    },
    {
      question: "Is there a mobile app for Mulyantaran?",
      answer:
        "Yes, Mulyantaran offers a mobile app for both iOS and Android, ensuring trading on the go.",
    },
    {
      question: "What is the minimum deposit amount?",
      answer:
        "The minimum deposit is $100, designed to be accessible for new traders while supporting effective arbitrage.",
    },
    {
      question: "How is my data protected?",
      answer:
        "Your data is secured with AES-256 encryption and regular security updates to prevent unauthorized access.",
    },
    {
      question: "Can I get customer support anytime?",
      answer:
        "Yes, Mulyantaran provides 24/7 customer support via live chat and email to assist with any issues.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#030303] text-mulyantaran-white py-10 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-mulyantaran-light text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-lg mb-8 text-[#B3B3B3] font-mulyantaran-light">
          Explore answers to common queries about Mulyantaran.
        </p>
        <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#161616] rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-mulyantaran-light ">{faq.question}</h3>
                {openIndex === index ? <LuChevronUp /> : <LuChevronDown />}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-[#B3B3B3] text-lg font-mulyantaran-light">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
